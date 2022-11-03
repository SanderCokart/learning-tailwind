import type {ReactNode} from 'react';
import '/styles/globals.css';

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="en">
        <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        <main>
            {children}
        </main>
        </body>
        </html>
    );
};

export default RootLayout;