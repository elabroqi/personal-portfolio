import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMapPin } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";

export const ContactSection = () => {

    return <section className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-wxl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Contact Information 
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Feel free to connect! I'm always open to discussing new opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <CiMail className="h-6 w-6 text-primary" /> 
                                {" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Email </h4>

                                <a
                                    href="mailto:elabroqi@gmail.com"
                                    className="text-muted-foreground hover:text-primary tranistion-colors"
                                    >
                                        contact@abroqi.dev
                                    </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <CiPhone className="h-6 w-6 text-primary" /> 
                                {" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone </h4>

                                <a
                                    href="tel:+13216664744"
                                    className="text-muted-foreground hover:text-primary tranistion-colors"
                                    >
                                    +1 (321) 666-4744
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <CiMapPin className="h-6 w-6 text-primary" /> 
                                {" "}
                            </div>
                            <div>
                                <h4 className="font-medium"> Location </h4>

                                <a
                                    className="text-muted-foreground hover:text-primary tranistion-colors"
                                    >
                                    Orlando, FL, United States
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4> Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="www.linkedin.com/in/aurela-broqi" target="_blank">
                                <FaLinkedin size={40}/>
                            </a>
                        </div>
                    </div>
                </div>


{/*
<div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

                    <form classsName="space-y-6">
                        <div>
                            <label  htmlFor="name" 
                                    className="block text-sm font-medium mb-2"
                            > Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                placeholder="Aurela Broqi..."
                            />
                        </div>
                         <div>
                            <label  htmlFor="email" 
                                    className="block text-sm font-medium mb-2"
                            > Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                placeholder="john@email.com"
                            />
                         </div>
                         <div>
                            <label  htmlFor="name" 
                                    className="block text-sm font-medium mb-2"
                            > Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                placeholder="Hello, I'd like to talk about..."
                            />
                        </div>

                        <button 
                            type="submit" 
                            className={cn(
                            "cosmic-button w-full flex items-center justify-center gap-2",
                            
                        )}
                        >
                            Send Message 
                            <Send size={20}></Send>
                        </button>
                    </form>

                </div>
*/}

            </div>
        </div>
    </section>
}