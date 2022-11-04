'use client';

import PocketBase from 'pocketbase';
import type {FormEvent} from 'react';
import {useState} from 'react';

export default function Comment() {
    const db = new PocketBase('http://127.0.0.1:8090');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const record = await db.records.create('messages', { subject, message });
        setResponse(JSON.stringify(record));
    };

    return <section className="p-6 my-12 scroll-mt-20 widescreen:section-min-height tallscreen:section-min-height" id="comment">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
            Leave A Comment
        </h2>
        <form className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4" onSubmit={onSubmit}>
            <label htmlFor="subject">Subject:</label>
            <input required
                   className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
                   id="subject"
                   maxLength={60}
                   minLength={3}
                   name="subject"
                   placeholder="Your Subject"
                   type="text"
                   value={subject}
                   onChange={e => setSubject(e.target.value)}/>
            <label htmlFor="message">Message:</label>
            <textarea required
                      className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
                      cols={30}
                      id="message"
                      name="message" placeholder="Your Message" rows={10} value={message}
                      onChange={e => setMessage(e.target.value)}/>
            <button
                className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none">
                Submit
            </button>
        </form>
        <pre>
            {response}
        </pre>
    </section>;
}