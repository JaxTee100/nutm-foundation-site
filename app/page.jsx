// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Programs from "@/components/Programs";
import Giving from "@/components/Giving";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <main className="scroll-smooth">
            <Hero />
            
            
            <Programs />
            <Giving />
            <Contact />
            <Footer />
        </main>
    );
}
