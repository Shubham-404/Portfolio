import React, { useState } from 'react'
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to an API or email service)
        console.log('Form submitted:', formData);
    };

    return (
        <div id='connect' className='min-h-100 w-full !p-20 max-md:!p-3 !pb-0 flex justify-center items-start'>
            <div className='!p-10 max-md:!p-3 max-md:max-w-120 !pb-0 w-220'>

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
                                className="w-full h-15 !p-5 bg-transparent text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
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
                                className="w-full h-15 !p-5 bg-transparent text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
                                placeholder="Emali"
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
                            rows="10"
                            className="w-full h-15 !p-5 bg-transparent text-white border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
                            placeholder="Your Message"
                        />
                        {/* Submit Button */}
                        <div className="!mt-6 !ml-3">
                            <Button btn="Don't Click!" Type="submit" Href="https://google.com" />
                        </div>
                    </div>

                </form>


                <div className="w-full h-full  flex gap-5 flex-wrap !pt-5 max-md:flex-col max-md:items-center justify-start items-center">
                    <section className='w-full h-full flex justify-evenly gap-2 items-center flex-wrap'>
                        <Social Name="Github" Src="/Portfolio/svgs/github.svg" Href="https://github.com/Shubham-404/" />
                        <Social Name="LinkedIn" Src="/Portfolio/svgs/linkedin.svg" Href="https://linkedin.com/in/shubham-singh404/" />
                        <Social Name="Instagram" Src="/Portfolio/svgs/instagram.svg" Href="https://instagram.com/shubham_404___/" />
                        <Social Name="Extra" Src="/Portfolio/svgs/namaste.svg" Href="https://github.com/Shubham-404/" />
                    </section>
                    <p className='!p-5 text-6xl font-bold max-w-full max-lg:text-5xl max-md:text-3xl h-full'>To know more about me!</p>


                </div>
            </div>
        </div>
    )
}

export default Contact