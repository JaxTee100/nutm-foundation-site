// components/Impact.tsx
export default function Impact() {
  return (
    <section id="impact" className="bg-green-100 py-20 px-6 text-green-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Impact</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">💸 $2M+ in Scholarships</h3>
            <p>Supporting students from all walks of life to achieve their academic dreams.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">🎓 1,500+ Students Assisted</h3>
            <p>Direct support provided for tuition, housing, and academic resources.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">🌱 35+ Campus Projects Funded</h3>
            <p>From research labs to green spaces, our donors shape the future of our campus.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
