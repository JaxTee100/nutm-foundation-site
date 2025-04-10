// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-6 px-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} University Foundation. All rights reserved.
      </p>
      <p className="text-xs mt-2">
        Made with 💚 using Next.js 15
      </p>
    </footer>
  );
}
