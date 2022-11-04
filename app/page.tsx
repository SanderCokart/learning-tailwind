import Hero from 'app/Hero';

// import PocketBase from 'pocketbase';
// import type {MessagesRecord, BaseRecord} from '@/types/pocketbase-types';
// import {Collections} from '@/types/pocketbase-types';
// import CommentsList from './CommentsList';
import ContactUs from './ContactUs';
import Rockets from './Rockets';
import Testimonials from './Testimonials';

// async function getMessages() {
//     const db = new PocketBase('http://127.0.0.1:8090');
//     const data = await db.records.getList(Collections.Messages);
//
//     return data?.items as any[];
// }

export default async function HomePage() {
    // const messages = await getMessages() as (MessagesRecord & BaseRecord)[];

    return (
        <>
            <Hero/>

            <hr className="mx-auto bg-black dark:bg-white w-1/2"/>

            <Rockets/>

            <hr className="mx-auto bg-black dark:bg-white w-1/2"/>

            <Testimonials/>

            <hr className="mx-auto bg-black dark:bg-white w-1/2"/>

            <ContactUs/>

            {/*<hr className="mx-auto bg-black dark:bg-white w-1/2"/>*/}

            {/*<CommentsList messages={messages}/>*/}
        </>
    );
}