# Gemini API Setup for Contact Form Validation

## Overview
The contact form now uses Google's Gemini AI to validate form submissions and detect potentially fake or spam entries before sending emails.

## Setup Steps

### 1. Get Gemini API Key
1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key (starts with `AIza...`)

### 2. Configure the API Key
1. Open `src/config/gemini.js`
2. Replace `YOUR_GEMINI_API_KEY_HERE` with your actual API key:

```javascript
export const GEMINI_CONFIG = {
    API_KEY: 'AIza...your_actual_api_key_here',
    // ... rest of config
};
```

### 3. Test the Integration
1. Start your development server: `npm run dev`
2. Navigate to the contact form
3. Try submitting with different types of data:
   - **Real data**: Should pass validation and send email
   - **Fake data**: Should show "Details entered seem fake" message
   - **Test data**: Should be caught by basic validation

## How It Works

### Validation Process
1. **Basic Validation**: Quick checks for obvious fake patterns
2. **AI Validation**: Gemini AI analyzes the content for authenticity
3. **Email Sending**: Only proceeds if validation passes

### Validation Criteria
The AI checks for:
- Name appears genuine (not gibberish or obviously fake)
- Email format and domain legitimacy
- Message content coherence and meaningfulness
- Overall communication intent

### Response Handling
- **Gemini returns 1**: Data appears legitimate → Send email
- **Gemini returns 0**: Data appears fake → Show warning message
- **API Error**: Fallback to basic validation only

## Configuration Options

### Customizing Validation
You can modify the validation prompt in `src/config/gemini.js`:

```javascript
VALIDATION_PROMPT: `Your custom validation prompt here...`
```

### Adjusting Sensitivity
Modify the basic validation patterns in `src/services/validationService.js`:

```javascript
const suspiciousPatterns = {
    name: /^(test|fake|spam|bot)/i,
    email: /^(test|fake|spam|bot)@/i,
    message: /^(test|fake|spam|bot)/i
};
```

## Error Handling

### API Failures
- If Gemini API is down, the form falls back to basic validation
- Users can still submit forms even if AI validation fails
- Errors are logged to console for debugging

### Rate Limits
- Gemini API has rate limits for free tier
- Consider implementing caching for repeated validations
- Monitor usage in Google AI Studio dashboard

## Security Notes

### API Key Security
- Never commit API keys to version control
- Consider using environment variables for production
- The API key is safe to use in frontend code (it's designed for client-side use)

### Privacy
- Form data is sent to Gemini for validation
- No data is stored by Gemini (it's processed and discarded)
- Consider this when handling sensitive information

## Troubleshooting

### Common Issues

1. **"API key not configured"**: Check your API key in `gemini.js`
2. **"Gemini API error"**: Check your API key validity and quota
3. **"No response from Gemini"**: Check network connection and API status
4. **Validation always fails**: Check the validation prompt and API response

### Debug Mode
Enable detailed logging by checking browser console:
- Look for "Validating form data with Gemini AI..."
- Check "Gemini validation result:" logs
- Monitor API response details

### Testing
Use the test utility in `src/utils/emailTest.js` to test validation:

```javascript
import { validateFormData } from './src/services/validationService.js';

// Test with sample data
const testData = {
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello, I would like to discuss a project.'
};

const result = await validateFormData(testData);
console.log('Validation result:', result);
```

## Cost Considerations

### Gemini API Pricing
- Free tier: Limited requests per day
- Paid tier: Pay per request
- Monitor usage in Google AI Studio

### Optimization Tips
- Basic validation catches obvious cases first
- Only use AI validation for edge cases
- Consider caching results for similar inputs

## Support
- [Gemini API Documentation](https://ai.google.dev/docs)
- [Google AI Studio](https://aistudio.google.com/)
- [API Status Page](https://status.cloud.google.com/)
