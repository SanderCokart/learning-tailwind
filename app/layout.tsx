'use client';

import type {ReactNode, MouseEvent} from 'react';
import '/styles/globals.css';

function RootLayout({ children }: { children: ReactNode }) {

    const toggleMenu = (e: MouseEvent<HTMLButtonElement>) => {
        const menu = document.getElementById('mobile-menu');
        menu?.classList.toggle('hidden');
        menu?.classList.toggle('flex');
    };

    return (
        <html className="sm:scroll-smooth" lang="en">
        <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <div className="bg-teal-700 text-white sticky top-0 z-10">
            <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <h1 className="text-3xl font-medium">
                    <a href="#hero">🚀 Acme Rockets</a>
                </h1>
                <div>
                    <button className="text-3xl md:hidden cursor-pointer" id="hamburger-button"
                            onClick={toggleMenu}>
                        &#9776;
                    </button>
                    <nav aria-label="main" className="hidden md:block space-x-8 text xl">
                        <a className="hover:opacity-90" href="#rockets">Our Rockets</a>
                        <a className="hover:opacity-90" href="#testimonials">Testimonials</a>
                        <a className="hover:opacity-90" href="#contact">Contact Us</a>
                    </nav>
                </div>
            </section>
            <section className="absolute top-0 bg-black w-full text-5xl flex-col justify-center origin-top animate-open-menu hidden"
                id="mobile-menu"
                onClick={toggleMenu}>
                <button className="text-8xl self-end px-6"  onClick={toggleMenu}>
                    &times;
                </button>
                <nav aria-label="mobile" className="flex flex-col min-h-screen items-center py-8">
                    <a className="w-full text-center py-6 hover:opacity-90" href="#hero">Home</a>
                    <a className="w-full text-center py-6 hover:opacity-90" href="#rockets">Our Rockets</a>
                    <a className="w-full text-center py-6 hover:opacity-90" href="#testimonials">Testimonials</a>
                    <a className="w-full text-center py-6 hover:opacity-90" href="#contact">Contact Us</a>
                    <a className="w-full text-center py-6 hover:opacity-90" href="#footer">legal</a>
                </nav>
            </section>
        </div>
        <main className="max-w-4xl mx-auto">
            {children}
        </main>
        <footer className="bg-teal-700 text-white text-xl" id="footer">
            <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
                <address>
                    <h2>Acme Rocket-Powered Products, Inc.</h2>
                    555 Astro Way<br/>
                    Fairfield, New Jersey 12345-5555<br/>
                    Email: <a href="mailto:inquiries@acmerockets.com">Inquires@AcmeRockets.com</a><br/>
                    Phone: <a href="tel:+15555555555">(555) 555-5555</a>
                </address>

                <nav aria-label="footer" className="hidden md:flex flex-col gap-2">
                    <a className="hover:opacity-90" href="#rockets">Our Rockets</a>
                    <a className="hover:opacity-90" href="#testimonials">Testimonials</a>
                    <a className="hover:opacity-90" href="#comment">Leave A Comment</a>
                    <a className="hover:opacity-90" href="#comments">Comments</a>
                </nav>

                <div className="flex flex-col sm:gap-2">
                    <p className="text-right">
                        Copyright &copy; <span id="year">{new Date().getFullYear()}</span>
                    </p>
                    <p className="text-right">
                        All Rights Reserved
                    </p>
                </div>

            </section>
        </footer>
        </body>
        </html>
    );
}

export default RootLayout;