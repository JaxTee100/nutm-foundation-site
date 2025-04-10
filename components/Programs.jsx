// components/Programs.tsx
export default function Programs() {
  return (
    <section id="programs" className="bg-white py-20 px-6 text-green-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Programs & Initiatives</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">🎓 Scholarships & Financial Aid</h3>
            <p>
              We provide merit-based and need-based scholarships to help students overcome financial barriers and complete their education.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">🔬 Research & Innovation Grants</h3>
            <p>
              Funding cutting-edge research in health, technology, climate science, and more to keep our university on the global map.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">🏛 Campus Development</h3>
            <p>
              Supporting infrastructure projects like green buildings, study spaces, and eco-friendly transportation.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">🤝 Community Outreach</h3>
            <p>
              Partnering with local communities to offer education, mentorship, and social support programs beyond campus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
