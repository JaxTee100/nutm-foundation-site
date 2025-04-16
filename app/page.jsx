// app/page.tsx
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Giving from "@/components/Giving";
import FoundationNote from "@/components/FoundationNote";

export default function Home() {
    return (
        <main className="scroll-smooth">
            <Hero />
            
            <FoundationNote />
            <Programs />
            <Giving />
            
            
        </main>
    );
}
