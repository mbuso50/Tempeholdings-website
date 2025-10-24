import { Header } from '../components/Sections/Header';
import { Hero } from '../components/Sections/Hero';
import { About } from '../components/Sections/About';
import { Services } from '../components/Sections/Services';
import { Portfolio } from '../components/Sections/Portfolio';
import { Contact } from '../components/Sections/Contact';
import { Footer } from '../components/Sections/Footer';
import { Toaster } from '../components/common/feedback/sonner';
import React from 'react';
export default function HomePage() {
    return (
        <div className="min-h-screen bg-white relative">
            <div className="relative z-10">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Services />
                    <Portfolio />

                    <Contact />
                </main>
                <Footer />
                <Toaster position="top-right" richColors />
            </div>
        </div>
    );
}