import { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        // Ensure the form ref is not null before accessing it
        if (form.current) {
            const formData = new FormData(form.current);
            const data = {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                message: formData.get('message') as string,
            };

            // Send the contact message to your email
            emailjs.send('service_3e9xo0l', 'template_u0fyjgm', data, 'DQVPd94fU3VRTt2UE')
                .then((result) => {
                    console.log(result.text);

                    // Send the auto-reply email
                    const autoReplyData = {
                        to_email: formData.get('email') as string, // the email of the person who contacted you
                        name: formData.get('name') as string,
                        message: formData.get('message') as string,
                    };

                    emailjs.send('service_3e9xo0l', 'template_nbujz9b', autoReplyData, 'DQVPd94fU3VRTt2UE')
                        .then((response) => {
                            console.log('Auto-reply sent', response);
                            if (form.current) {
                                form.current.reset();
                            }
                        })
                        .catch((error) => {
                            console.error('Error sending auto-reply', error);
                        });
                })
                .catch((error) => {
                    console.error('Error sending email', error);
                });
        }
    };

    return (
        <div className="bg-black text-white">
            <div className="max-w-8xl mx-auto px-16 md:px-32 py-16">
                {/* Main Content */}
                <div className="mb-12">
                    <h1 className="text-6xl font-bold tracking-tight mb-4">
                        LET'S <span className="italic">TALK!</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl">
                        Bring to the table win-win survival strategies to ensure proactive domination. At the
                        end of the day, going forward, a new normal that has evolved
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-lg font-medium mb-6">Quick Links</h2>
                            <nav className="space-y-4">
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <span className="text-[#9bf00b]">›</span>
                                    <a href="#" className="hover:text-white transition-colors">About Xstar</a>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <span className="text-[#9bf00b]">›</span>
                                    <a href="#" className="hover:text-white transition-colors">Our Services</a>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <span className="text-[#9bf00b]">›</span>
                                    <a href="#" className="hover:text-white transition-colors">Our Blogs</a>
                                </div>
                                <div className="flex items-center space-x-2 text-gray-400">
                                    <span className="text-[#9bf00b]">›</span>
                                    <a href="#" className="hover:text-white transition-colors">Contact Us</a>
                                </div>
                            </nav>
                        </div>

                        <div>
                            <h2 className="text-lg font-medium mb-6">Contact Us</h2>
                            <address className="text-gray-400 not-italic mb-8">
                                4517 Washington, mg Manchester,<br />
                                Kentucky 39495
                            </address>
                            <div>
                                <h3 className="text-gray-400 mb-2">Phone Call:</h3>
                                <p className="text-white">208-6666-0112, 308-5555-0113</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <form ref={form} onSubmit={sendEmail}>

                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div>
                                    <label htmlFor="name" className="block text-sm mb-2">Your Name*</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-full bg-[#212121] border border-gray-800 rounded p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9bf00b]"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2">Your Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        className="w-full bg-[#212121] border border-gray-800 rounded p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9bf00b]"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm mb-2">Your Message*</label>
                                <textarea
                                    id="message"
                                    name="message"  // Add the name attribute
                                    rows={6}
                                    placeholder="Write Message"
                                    className="w-full bg-[#212121] border border-gray-800 rounded p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#9bf00b]"
                                />
                            </div>
                            <button className="w-full bg-black hover:bg-gray-900 text-white font-medium py-4 px-6 rounded flex items-center justify-center space-x-2 border border-gray-800">
                                <span className="text-[#9bf00b] transform rotate-45">↗</span>
                                <span>Get In Touch</span>
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
