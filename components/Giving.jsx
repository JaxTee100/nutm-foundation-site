import Link from "next/link";

// components/Giving.tsx
export default function Giving() {
  return (
    <section id="giving" className="bg-green-200 py-20 px-6 text-green-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ways to Support</h2>
        <p className="text-lg md:text-xl mb-10">
          Your generosity fuels scholarships, innovation, and a brighter future. Whether a one-time gift or ongoing support, every contribution makes a difference.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">🎁 One-Time Donations</h3>
            <p>Make an immediate impact with a secure one-time contribution to the foundation.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">🔄 Monthly Giving</h3>
            <p>Join our community of recurring donors and help sustain long-term programs and scholarships.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">🏛 Legacy & Planned Gifts</h3>
            <p>Leave a legacy by including the foundation in your estate planning, trusts, or wills.</p>
          </div>
        </div>

        <Link
          href="http://nutm.edu.ng/donate"
          target="_blank"
          className="mt-10 inline-block bg-green-700 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-green-800 transition"
        >
          Contact Us to Give
        </Link>
      </div>
    </section>
  );
}
