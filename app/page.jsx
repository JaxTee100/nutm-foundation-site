// app/page.tsx
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Giving from "@/components/Giving";
import FoundationNote from "@/components/FoundationNote";
import Impact from "@/components/Impact";
import TrusteesSection from "@/components/Team";
import AboutSection from "@/components/About";

export default function Home() {
    return (
        <main className="scroll-smooth ">
            <Hero />
            
            <FoundationNote />
            <TrusteesSection />
            <Programs />
            
            <AboutSection />
            <Impact />
            
            
            
        </main>
    );
}
