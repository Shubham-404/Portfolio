import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from '@emailjs/browser';
import Img from './elems/Img.jsx'
import Social from './elems/Social.jsx'
import Heading from './elems/Heading'
import Button from './elems/Button.jsx'
import Input from './elems/Input.jsx'


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
        <div id='connect' className='min-h-100 w-full !p-20 max-md:!p-3 !pb-0 flex justify-center items-start'>
            <div id='cn' className='!p-10 max-md:!p-3 max-md:max-w-120 !pb-0 w-220'>

                <Heading Head="Connect" />

                <p className='!p-5 text-6xl font-bold max-w-full max-lg:text-5xl max-md:text-3xl h-full'>Let's Connect.</p>

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
                                className="!px-6 !py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 !transition-colors disabled:opacity-50"
                            >
                                {status.submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </div>

                </form>


                <div className="w-full h-full  flex gap-5 flex-wrap !pt-5 max-md:flex-col max-md:items-center justify-start items-center">
                    <section className='w-full h-full flex justify-center gap-5 items-center flex-wrap'>
                        <Social Name="Github" Src="/Portfolio/svgs/github.svg" Href="https://github.com/Shubham-404/" />
                        <Social Name="LinkedIn" Src="/Portfolio/svgs/linkedin.svg" Href="https://linkedin.com/in/shubham-404-/" />
                        <Social Name="Instagram" Src="/Portfolio/svgs/instagram.svg" Href="https://instagram.com/shubham_404___/" />
                        <Social Name="Medium" Src="/Portfolio/svgs/medium.svg" Href="https://medium.com/@shubham-404" />
                    </section>
                    <p className='!p-5 text-6xl font-bold max-w-full max-lg:text-5xl max-md:text-3xl h-full'>To know more about me!</p>


                </div>
            </div>
        </div>
    )
}

export default Contact