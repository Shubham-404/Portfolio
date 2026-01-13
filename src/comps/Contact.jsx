import React, { useState, useEffect, useRef, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import Heading from './elems/Heading'
import { EMAILJS_CONFIG } from '../config/emailjs';
import { validateFormData, basicValidation } from '../services/validationService';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null,
        validating: false
    });

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic form validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus({
                submitting: false,
                submitted: false,
                error: 'Please fill in all fields.'
            });
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({
                submitting: false,
                submitted: false,
                error: 'Please enter a valid email address.'
            });
            return;
        }

        setStatus({ submitting: true, submitted: false, error: null, validating: true });

        try {
            // First, perform basic validation
            const basicValidationResult = basicValidation(formData);
            if (!basicValidationResult.isValid) {
                setStatus({
                    submitting: false,
                    submitted: false,
                    error: 'Please enter valid data, AI is detecting spam here!',
                    validating: false
                });
                return;
            }

            // Then, perform AI validation using Gemini
            const validationResult = await validateFormData(formData);

            if (!validationResult.isValid) {
                setStatus({
                    submitting: false,
                    submitted: false,
                    error: 'Please enter valid data, AI is detecting spam here!',
                    validating: false
                });
                return;
            }

            setStatus(prev => ({ ...prev, validating: false }));

            // Send email using EmailJS
            const templateParams = {
                from_name: formData.name.trim(),
                from_email: formData.email.trim(),
                message: formData.message.trim(),
                to_name: EMAILJS_CONFIG.TO_NAME,
                reply_to: formData.email.trim(),
            };

            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            setStatus({
                submitting: false,
                submitted: true,
                error: null
            });

            // Reset form
            setFormData({ name: '', email: '', message: '' });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setStatus(prev => ({ ...prev, submitted: false }));
            }, 5000);

        } catch (error) {
            let errorMessage = 'Failed to send message. Please try again.';

            if (error.text) {
                errorMessage = error.text;
            } else if (error.message) {
                errorMessage = 'If you\'re seeing this, then probably email service is not available. You can still use social media to connect!.';
            }

            setStatus({
                submitting: false,
                submitted: false,
                error: 'If you\'re seeing this, then probably email service is not available. You can still use social media to connect!.'
            });
        }
    };

    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const children = gsap.utils.toArray(container.children);

        const scrollTriggers = children.map((child) => {
            return gsap.fromTo(child,
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    ease: "back.out(1)",
                    scrollTrigger: {
                        trigger: child,
                        start: "top 80%",
                        end: "top 60%",
                        scrub: 1,
                        markers: false,
                    }
                }
            );
        });

        return () => {
            scrollTriggers.forEach(st => st?.scrollTrigger?.kill());
        };
    }, [])

    return (
        <>
            <div id='connect' className='min-h-100 w-full !p-20 !pb-20 max-md:!p-3 flex justify-center items-start'>
                <div ref={containerRef} id='cn' className='!p-10 max-md:!p-3 max-md:max-w-120 !pb-0 w-220'>

                    <Heading Head="Connect" />

                    <p className='p-5 text-lg/10 max-w-full max-lg:text-base/8 max-md:text-sm/5 h-full'>Feel free to share a suggestion, talk about an idea or simply say <i>' नमस्ते '</i> &nbsp;in your language! <br />I'd love to connect to people from different parts of the globe.</p>

                    <form
                        onSubmit={handleSubmit}
                        className="w-[90%] rounded-lg self-center justify-self-center flex flex-col gap-4"
                    >
                        {/* Status Messages */}
                        {status.error && (
                            <div className={`rounded-lg p-4 ${status.error.includes('fake')
                                ? 'bg-orange-900/20 border border-orange-500/50 text-orange-300'
                                : 'bg-red-900/20 border border-red-500/50 text-red-300'
                                }`}>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        {status.error.includes('fake') ? (
                                            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        ) : (
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                        )}
                                    </svg>
                                    <span>{status.error}</span>
                                </div>
                            </div>
                        )}

                        {status.submitted && (
                            <div className="bg-green-900/20 border border-green-500/50 rounded-lg p-4 text-green-300">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Message sent successfully! I'll get back to you soon.</span>
                                </div>
                            </div>
                        )}

                        {/* Name and Email Inputs */}
                        <div className="flex-1">
                            <label htmlFor="name" className='text-sm p-2 opacity-80 block'>Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={status.submitting}
                                className="w-full h-12 p-4 mt-2 bg-indigo-900/50 placeholder-indigo-200/90 text-white ring-1 ring-gray-500 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                placeholder="Sam Altman"
                            />
                        </div>
                        <div className="flex-1 min-w-64">
                            <label htmlFor="email" className='text-sm p-2 opacity-80 block'>Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={status.submitting}
                                className="w-full h-12 p-4 mt-2 bg-indigo-900/50 placeholder-indigo-200/90 text-white ring-1 ring-gray-500 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                                placeholder="sam.altman@open.ai"
                            />
                        </div>

                        {/* Message Input */}
                        <div className="w-full">
                            <label htmlFor="message" className='text-sm p-2 opacity-80 block'>Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={status.submitting}
                                rows="8"
                                className="w-full p-4 mt-2 bg-indigo-900/50 placeholder-indigo-200/90 text-white ring-1 ring-gray-500 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 resize-vertical"
                                placeholder="Your beloved message..."
                            />
                            <p className='text-sm opacity-60 mt-2'>
                                If you're unable to send a message, kindly reach me out through other platforms mentioned below.
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-start">
                            <button
                                type="submit"
                                disabled={status.submitting || status.submitted || status.validating}
                                className="cursor-pointer text-white flex items-center justify-center rounded-lg font-bold overflow-hidden w-40 gap-2 hover:scale-105 hover:brightness-110 active:scale-95 py-2 border-x-2 border-l-indigo-300 border-r-purple-400 bg-gradient-to-r from-indigo-600 to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:brightness-100 transition-all duration-200"
                            >
                                {status.validating ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Validating...
                                    </>
                                ) : status.submitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default memo(Contact);