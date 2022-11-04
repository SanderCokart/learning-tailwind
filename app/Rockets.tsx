import type {StaticImageData} from 'next/image';
import Image from 'next/image';

import RocketLaunch from '@/public/static/images/rocketlaunch.png';
import RocketMan from '@/public/static/images/rocketman.png';
import RocketRide from '@/public/static/images/rocketride.png';

export default function Rockets() {
    return <section className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height" id="rockets">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Our Rockets
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
            <RocketListItem image={RocketMan}
                            subtitle="Affordable Exploration"
                            title="Explorer"
                            value={1}/>
            <RocketListItem image={RocketRide}
                            subtitle="Best Selling Rocket!"
                            title="Adventurer"
                            value={2}/>
            <RocketListItem image={RocketLaunch}
                            subtitle="Affordable Exploration"
                            title="Explorer"
                            value={3}/>
        </ul>
    </section>;
}

interface RocketListItemProps {
    title: string;
    subtitle: string;
    value: number;
    image: StaticImageData;
}

function RocketListItem({ title, subtitle, value, image }: RocketListItemProps) {
    return <li
        className="w-2/3 sm:w5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white py-6 px-2 rounded-3xl shadow-xl dark:bg-black">
        <Image alt={title} className="w-1/2 mb-6" src={image}/>
        <h3 className="text-3xl text-center text-slate-900 dark:text-white">
            {title}
        </h3>
        <p className="hidden mt-2 sm:block text-3xl text-center text-slate-500 dark:text-slate-400">
            {[...Array(value)].map(() => '$')}
        </p>
        <p className="sm:hidden mt-2 text-2xl text-center text-slate-500 dark:text-slate-400">
            {subtitle}
        </p>
    </li>;
}
