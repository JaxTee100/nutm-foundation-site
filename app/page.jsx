// app/page.tsx
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Giving from "@/components/Giving";

export default function Home() {
    return (
        <main className="scroll-smooth">
            <Hero />
            
            
            <Programs />
            <Giving />
            
            
        </main>
    );
}
