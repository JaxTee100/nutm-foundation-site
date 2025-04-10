import MotionSection from "./MotionSection";

// components/Hero.tsx
export default function Hero() {
  return (
    <MotionSection>
      <section id="hero" className="min-h-screen bg-gradient-to-r from-green-900 to-green-main text-white flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Empowering Futures Through Education
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
          The University Foundation supports students, research, and innovation through generous contributions from our community.
        </p>
        <a
          href="#giving"
          className="bg-white text-green-main font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-100 transition"
        >
          Donate Now
        </a>
      </section>
    </MotionSection>

  );
}
