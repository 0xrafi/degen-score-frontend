import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-4 px-8 text-sm text-[#b3b3b3] font-mono">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p> Aztec Demo 🤑</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline font-mono" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline font-mono" prefetch={false}>
            How It Works
          </Link>
        </div>
      </div>
    </footer>
  );
}
