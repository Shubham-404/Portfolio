// Validation Test Utility
// Use this to test the Gemini validation functionality

import { validateFormData, basicValidation } from '../services/validationService';

// Test cases for validation
export const testCases = [
    {
        name: 'Legitimate User',
        data: {
            name: 'John Smith',
            email: 'john.smith@company.com',
            message: 'Hi, I would like to discuss a potential collaboration on your portfolio project. I am a web developer with 5 years of experience.'
        },
        expected: 'should pass validation'
    },
    {
        name: 'Fake Test Data',
        data: {
            name: 'test user',
            email: 'test@test.com',
            message: 'this is a test message'
        },
        expected: 'should fail basic validation'
    },
    {
        name: 'Suspicious Spam',
        data: {
            name: 'asdf qwerty',
            email: 'spam@fake.com',
            message: 'buy now click here free money'
        },
        expected: 'should fail validation'
    },
    {
        name: 'Short Message',
        data: {
            name: 'Jane Doe',
            email: 'jane@example.com',
            message: 'hi'
        },
        expected: 'should fail basic validation'
    },
    {
        name: 'Professional Inquiry',
        data: {
            name: 'Sarah Johnson',
            email: 'sarah.johnson@techcorp.com',
            message: 'Hello Shubham, I came across your portfolio and I\'m impressed with your React and Node.js projects. I would like to discuss a potential full-stack developer position at our company.'
        },
        expected: 'should pass validation'
    }
];

// Run all test cases
export const runValidationTests = async () => {
    console.log('🧪 Running validation tests...\n');
    
    for (const testCase of testCases) {
        console.log(`📝 Testing: ${testCase.name}`);
        console.log(`📊 Data:`, testCase.data);
        console.log(`🎯 Expected: ${testCase.expected}`);
        
        // Test basic validation
        const basicResult = basicValidation(testCase.data);
        console.log(`✅ Basic validation: ${basicResult.isValid ? 'PASS' : 'FAIL'} (${basicResult.confidence})`);
        
        // Test AI validation (if API key is configured)
        try {
            const aiResult = await validateFormData(testCase.data);
            console.log(`🤖 AI validation: ${aiResult.isValid ? 'PASS' : 'FAIL'} (${aiResult.confidence})`);
        } catch (error) {
            console.log(`🤖 AI validation: SKIPPED (${error.message})`);
        }
        
        console.log('---\n');
    }
    
    console.log('✅ All tests completed!');
};

// Test individual case
export const testSingleCase = async (formData) => {
    console.log('🧪 Testing single case...');
    console.log('📊 Data:', formData);
    
    const basicResult = basicValidation(formData);
    console.log(`✅ Basic validation: ${basicResult.isValid ? 'PASS' : 'FAIL'}`);
    
    try {
        const aiResult = await validateFormData(formData);
        console.log(`🤖 AI validation: ${aiResult.isValid ? 'PASS' : 'FAIL'}`);
        return { basic: basicResult, ai: aiResult };
    } catch (error) {
        console.log(`🤖 AI validation: ERROR - ${error.message}`);
        return { basic: basicResult, ai: null };
    }
};

// Usage examples:
// import { runValidationTests, testSingleCase } from './src/utils/validationTest.js';
// 
// // Run all tests
// runValidationTests();
// 
// // Test specific data
// testSingleCase({
//     name: 'Test User',
//     email: 'test@example.com',
//     message: 'This is a test message'
// });
