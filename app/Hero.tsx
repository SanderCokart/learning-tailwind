import Image from 'next/image';

import RocketDab from '@/public/static/images/rocketdab.png';

export default function Hero() {
    return (
        <section
            className="z-10 mx-auto mb-12 flex max-w-4xl scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 widescreen:section-min-height tallscreen:section-min-height sm:flex-row"
            id="hero">
            <article className="sm:w-1/2">
                <h2 className="max-w-md text-center text-4xl font-bold capitalize text-slate-900 dark:text-white sm:text-left sm:text-5xl">
                    we boldy go <span
                    className="text-indigo-700 dark:text-indigo-300">where no rocket</span> has gone before...
                </h2>
                <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
                    We are building rockets for the next century today. From the Moon to Mars, Jupiter and
                    beyond...
                </p>
                <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
                    Think Acme Rockets.
                </p>
            </article>
            <Image priority alt="Rocket Dab" className="w-1/2" src={RocketDab}/>
        </section>
    );
}
