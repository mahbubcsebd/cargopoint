'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeaderTwo from '@/components/HeaderTwo';
import Subscribe from '@/components/Subscribe';
import { usePathname } from 'next/navigation';
import '../styles/globals.css';
import { inter } from './fonts';

export default function RootLayout({ children }) {
    const pathname = usePathname();
    return (
        <html lang="en">
            <body className={`${inter.className}`}>
                {pathname === '/home' ? <HeaderTwo /> : <Header />}
                {children}
                <Subscribe />
                <Footer />
            </body>
        </html>
    );
}
