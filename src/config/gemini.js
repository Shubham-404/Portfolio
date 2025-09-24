// Gemini API Configuration
// Get your API key from: https://aistudio.google.com/app/apikey

export const GEMINI_CONFIG = {
    // Your Gemini API Key - reads from environment variable
    API_KEY: "no-api-key-found",
    
    // Gemini API endpoint
    API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent',
    
    // Validation prompt template
    VALIDATION_PROMPT: `You are a form validation assistant. Analyze the following contact form details and determine if they appear to be legitimate or potentially fake/spam.

Form Details:
- Name: {{name}}
- Email: {{email}}
- Message: {{message}}

Please analyze these details and respond with ONLY a single digit:
- 1 if the details appear legitimate and genuine
- 0 if the details appear fake, spam, or suspicious

Consider these factors:
- Name appears real (not gibberish, not obviously fake)
- Email format is valid and appears legitimate
- Message content is coherent and meaningful
- Overall impression suggests genuine communication intent

Respond with only: 1 or 0`
};

// Validation function to check if API key is properly configured
export const validateGeminiConfig = () => {
    if (!GEMINI_CONFIG.API_KEY) {
        console.error('AI key is not configured. Please set the APIKey in your environment variables.');
        return false;
    }
    return true;
};
