// Validation Service using Gemini API
import { GEMINI_CONFIG } from '../config/gemini';

/**
 * Validates form data using Gemini API
 * @param {Object} formData - The form data to validate
 * @param {string} formData.name - User's name
 * @param {string} formData.email - User's email
 * @param {string} formData.message - User's message
 * @returns {Promise<{isValid: boolean, confidence: string}>} - Validation result
 */
export const validateFormData = async (formData) => {
    try {
        // Check if API key is configured
        if (!GEMINI_CONFIG.API_KEY || GEMINI_CONFIG.API_KEY === 'YOUR_GEMINI_API_KEY_HERE') {
            console.warn('Gemini API key not configured. Skipping validation.');
            return { isValid: true, confidence: 'skipped' };
        }

        // Prepare the prompt with form data
        const prompt = GEMINI_CONFIG.VALIDATION_PROMPT
            .replace('{{name}}', formData.name || '')
            .replace('{{email}}', formData.email || '')
            .replace('{{message}}', formData.message || '');

        // Prepare the request payload
        const requestBody = {
            contents: [{
                parts: [{
                    text: prompt
                }]
            }],
            generationConfig: {
                temperature: 0.1,
                topK: 1,
                topP: 1,
                maxOutputTokens: 1,
            }
        };

        // Make API request to Gemini
        const response = await fetch(`${GEMINI_CONFIG.API_URL}?key=${GEMINI_CONFIG.API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        // Extract the validation result
        const result = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
        
        if (!result) {
            throw new Error('No response from Gemini API');
        }

        // Parse the result (should be 0 or 1)
        const isValid = result === '1';
        
        console.log('Gemini validation result:', { result, isValid, formData });
        
        return { 
            isValid, 
            confidence: isValid ? 'high' : 'low',
            rawResult: result
        };

    } catch (error) {
        console.error('Validation service error:', error);
        
        // If validation fails, allow the form to proceed (fail open)
        // This ensures the form still works even if Gemini API is down
        return { 
            isValid: true, 
            confidence: 'error',
            error: error.message
        };
    }
};

/**
 * Quick validation for basic checks (without API call)
 * @param {Object} formData - The form data to validate
 * @returns {Object} - Basic validation result
 */
export const basicValidation = (formData) => {
    const { name, email, message } = formData;
    
    // Basic heuristics for fake data detection
    const suspiciousPatterns = {
        name: /^(test|fake|spam|bot|admin|user|demo|sample|asdf|qwerty|123|abc)/i,
        email: /^(test|fake|spam|bot|admin|user|demo|sample|asdf|qwerty|123|abc)@/i,
        message: /^(test|fake|spam|bot|asdf|qwerty|123|abc|hello world|hi there|this is a test)/i
    };
    
    const isSuspicious = 
        suspiciousPatterns.name.test(name) ||
        suspiciousPatterns.email.test(email) ||
        suspiciousPatterns.message.test(message) ||
        message.length < 10 ||
        name.length < 2;
    
    return {
        isValid: !isSuspicious,
        confidence: isSuspicious ? 'low' : 'medium',
        reason: isSuspicious ? 'Basic validation detected suspicious patterns' : 'Basic validation passed'
    };
};
