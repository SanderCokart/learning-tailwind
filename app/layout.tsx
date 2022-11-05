'use client';

import type {ReactNode} from 'react';
import '/styles/globals.css';

function Footer() {
    return <footer className="bg-red-500 text-md text-white flex flex-col justify-center" id="footer">
        <section className="mx-auto flex max-w-4xl flex-col p-8 sm:flex-row sm:justify-between gap-32">
            <address>
                <h2>Acme Rocket-Powered Products, Inc.</h2>
                555 Astro Way<br/>
                Fairfield, New Jersey 12345-5555<br/>
                Email: <a href="mailto:inquiries@acmerockets.com">Inquires@AcmeRockets.com</a><br/>
                Phone: <a href="tel:+15555555555">(555) 555-5555</a>
            </address>

            <nav aria-label="footer" className="hidden flex-col gap-2 md:flex">
                <a className="hover:opacity-90" href="#rockets">Our Rockets</a>
                <a className="hover:opacity-90" href="#testimonials">Testimonials</a>
                <a className="hover:opacity-90" href="#comment">Leave A Comment</a>
                <a className="hover:opacity-90" href="#comments">Comments</a>
            </nav>


        </section>
        <section className="flex justify-center py-4">
            <p className="text-right">
                Copyright &copy; <span id="year">{new Date().getFullYear()}</span>
            </p>
            <p className="text-right">
                All Rights Reserved
            </p>
        </section>
    </footer>;
}

function DesktopNav(props: { onClick: () => void }) {
    return <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-3xl font-medium">
            <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <div>
            <button className="relative h-8 w-8 cursor-pointer text-3xl md:hidden" id="hamburger-button"
                    onClick={props.onClick}>
                {/*&#9776;*/}
                <div
                    className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500">

                </div>
            </button>
            <nav aria-label="main" className="hidden space-x-8 text xl md:block">
                <a className="hover:opacity-90" href="#rockets">Our Rockets</a>
                <a className="hover:opacity-90" href="#testimonials">Testimonials</a>
                <a className="hover:opacity-90" href="#contact">Contact Us</a>
            </nav>
        </div>
    </section>;
}

function MobileNav(props: { onClick: () => void }) {
    return <section
        className="absolute hidden w-full origin-top flex-col justify-center bg-black text-5xl top-68 animate-open-menu"
        id="mobile-menu"
        onClick={props.onClick}>
        {/*<button className="self-end px-6 text-8xl"  onClick={toggleMenu}>*/}
        {/*    &times;*/}
        {/*</button>*/}
        <nav aria-label="mobile" className="flex min-h-screen flex-col items-center py-8">
            <a className="w-full py-6 text-center hover:opacity-90" href="#hero">Home</a>
            <a className="w-full py-6 text-center hover:opacity-90" href="#rockets">Our Rockets</a>
            <a className="w-full py-6 text-center hover:opacity-90" href="#testimonials">Testimonials</a>
            <a className="w-full py-6 text-center hover:opacity-90" href="#contact">Contact Us</a>
            <a className="w-full py-6 text-center hover:opacity-90" href="#footer">legal</a>
        </nav>
    </section>;
}

function RootLayout({ children }: { children: ReactNode }) {

    const toggleMenu = () => {
        const button = document.getElementById('hamburger-button');
        const menu = document.getElementById('mobile-menu');
        menu?.classList.toggle('hidden');
        menu?.classList.toggle('flex');
        button?.classList.toggle('toggle-btn');
    };

    return (
        <html className="sm:scroll-smooth" lang="en">
        <head>
            <meta content="width=device-width, initial-scale=1, minimum-scale=1" name="viewport"/>
            <title>Acme Rockets</title>
        </head>
        <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <div className="sticky top-0 z-10 bg-red-500 text-white">
            <DesktopNav onClick={toggleMenu}/>
            <MobileNav onClick={toggleMenu}/>
        </div>
        {children}
        <Footer/>
        </body>
        </html>
    );
}

export default RootLayout;