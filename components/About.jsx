// components/About.tsx
export default function About() {
  return (
    <section id="about" className="bg-green-50 py-20 px-6 text-green-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Foundation</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          The University Foundation is dedicated to advancing academic excellence, supporting student success, and enhancing campus life through philanthropic contributions.
        </p>
        <p className="text-md md:text-lg leading-relaxed">
          Established in partnership with alumni and community leaders, we provide funding for scholarships, faculty initiatives, research programs, and campus development. Together, we help shape a better future.
        </p>
      </div>
    </section>
  );
}
