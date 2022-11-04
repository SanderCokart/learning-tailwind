import Image from 'next/image';

import RocketDab from '@/public/static/images/rocketdab.png';

export default function Hero() {
    return <section
        className="flex flex-col-reverse justify-center sm:flex-row items-center p-6 gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height"
        id="hero">
        <article className="sm:w-1/2">
            <h2 className="max-w-md capitalize text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
                we boldy go <span
                className="text-indigo-700 dark:text-indigo-300">where no rocket</span> has gone before...
            </h2>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                We are building rockets for the next century today. From the Moon to Mars, Jupiter and
                beyond...
            </p>
            <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
                Think Acme Rockets.
            </p>
        </article>
        <Image priority alt="Rocket Dab" className="w-1/2" src={RocketDab}/>
    </section>;
}