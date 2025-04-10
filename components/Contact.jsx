// components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="bg-green-100 py-20 px-6 text-green-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-10 text-lg">
          Have questions or want to contribute? Reach out to us — we’d love to hear from you.
        </p>

        <form className="grid gap-6 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>

          <button
            type="submit"
            className="bg-green-700 text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
