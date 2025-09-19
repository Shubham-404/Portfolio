// Gemini API Configuration
// Get your API key from: https://aistudio.google.com/app/apikey

export const GEMINI_CONFIG = {
    // Your Gemini API Key
    API_KEY: 'Your_Gemini_API_Key_Here',
    
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

// Instructions for setup:
// 1. Go to https://aistudio.google.com/app/apikey
// 2. Create a new API key
// 3. Replace 'YOUR_GEMINI_API_KEY_HERE' with your actual API key
// 4. The API key should start with 'AIza...'
