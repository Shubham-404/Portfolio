import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import emailjs from '@emailjs/browser';
// import Img from './elems/Img.jsx'
// import Social from './elems/Social.jsx'
import Heading from './elems/Heading'
// import Button from './elems/Button.jsx'
// import Input from './elems/Input.jsx'


const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });

        try {
            await emailjs.send(
                'service_sks_404', // Replace with your EmailJS service ID
                'template_e5jrkoc', // Replace with your EmailJS template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                'me13X6x6eGJ25gDDR' // Replace with your EmailJS public key
            );

            setStatus({ submitting: false, submitted: true, error: null });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setStatus({ submitting: false, submitted: false, error: error.message });
        }
    };

    useEffect(() => {
        gsap.registerPlugin("ScrollTrigger")
        gsap.registerPlugin(useGSAP)

            const container = document.querySelector('#cn');
            const children = gsap.utils.toArray(container.children);

            children.forEach((child) => {
                gsap.fromTo(child, { scale: .8, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: .5,
                        ease: "back.out(1)",
                        scrollTrigger: {
                            trigger: child,
                            start: "top 80%",
                            end: "top 60%",
                            scrub: 1,
                            markers: false,
                        }
                    })
            })

    }, [])

    return (
        <div id='connect' className='min-h-100 w-full !p-20 !pb-20 max-md:!p-3 flex justify-center items-start'>
            <div id='cn' className='!p-10 max-md:!p-3 max-md:max-w-120 !pb-0 w-220'>

                <Heading Head="Connect" />

                <p className='!p-5 text-xl font-semibold text-nowrap max-w-full max-lg:text-2xl max-md:text-xl h-full leading-[2.5rem]'>Share a suggestion, an idea or just a <br /> 'Namaste' below.</p>

                <form
                    onSubmit={handleSubmit}
                    className="w-full rounded-lg self-center justify-self-center flex flex-col gap-3"
                >

                    {/* Name Input */}
                    <div className='flex flex-wrap'>

                        <div className="!m-3 w-max">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full h-15 !p-5 bg-indigo-200/10 ring-1 ring-gray-500 inset-shadow-lg rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="!m-3 w-max">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full h-15 !p-5 bg-indigo-200/10 ring-1 ring-gray-500 inset-shadow-lg rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
                                placeholder="Email"
                            />
                        </div>

                    </div>

                    {/* Message Input */}
                    <div className="!m-4 flex flex-col gap-5">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="10"
                            className="w-full h-25 !p-5 bg-indigo-200/10 ring-1 ring-gray-500 inset-shadow-lg rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
                            placeholder="Your Message"
                        />
                        <span className='text-xs text-gray-500'>(If you're unable to send a message, kindly reach me out through other platforms mentioned below.)</span>

                        {/* Status Messages */}
                        {status.error && (
                            <p className="text-red-500 !ml-3">{status.error}</p>
                        )}
                        {status.submitted && (
                            <p className="text-green-500 !ml-3">Message sent successfully!</p>
                        )}

                        {/* Submit Button */}
                        <div className="!mt-6 !ml-3">
                            <button
                                type="submit"
                                disabled={status.submitting}
                                className="cursor-pointer flex items-center justify-center rounded-lg !text-bold overflow-hidden w-35 gap-1 jush2-center hover:scale-105 hover:brightness-110 active:scale-95 !px-3 !py-2 border-x-2 border-l-indigo-300 border-r-purple-400 bg-linear-to-r from-indigo-600 to-purple-800"
                            >
                                {status.submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Contact