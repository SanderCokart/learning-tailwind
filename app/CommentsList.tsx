import type {MessagesRecord, BaseRecord} from '@/types/pocketbase-types';

export default function CommentsList({ messages }: { messages: (MessagesRecord & BaseRecord)[] }) {
    return (
        <section className="p-6 my-12 scroll-mt-16 widescreen:section-min-height tallscreen:section-min-height" id="comments">
            <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
                Comments
            </h2>
            <ul className="list-none mx-auto my-12 flex flex-col items-center gap-8">
                {messages.map((message) => (
                    <li key={message.id} className="bg-teal-600 dark:bg-black">
                        <p className="text-2xl sm:text-3xl text-left mt-2 text-indigo-700 dark:text-indigo-300 font-bold">{message.subject}</p>
                        <p className="italic text-1xl sm:text-3xl text-left mt-2 text-black dark:text-white">{message.message}</p>
                    </li>
                ))}
                <hr className="mx-auto bg-black dark:bg-white w-full"/>
            </ul>
        </section>
    );
}