export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 backdrop-blur-md bg-[#18181B]/40 border-b border-white/5 flex justify-between items-center">
      <a href="#" className="text-xl font-heading font-black tracking-tighter text-white uppercase">
        Zarathos<span className="text-orange-500">_</span>
      </a>
      <div className="hidden md:flex gap-8 items-center">
        <a href="#process" className="text-sm font-bold text-gray-400 hover:text-white transition-colors tracking-widest uppercase">Process</a>
        <a href="#services" className="text-sm font-bold text-gray-400 hover:text-white transition-colors tracking-widest uppercase">Services</a>
        <a href="#work" className="text-sm font-bold text-gray-400 hover:text-white transition-colors tracking-widest uppercase">Work</a>
      </div>
      <a
        href="#contact"
        className="px-6 py-2 rounded-sm border border-orange-500 bg-orange-900/10 text-orange-500 font-bold text-sm tracking-wider uppercase transition-all hover:bg-orange-500 hover:text-[#050505] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
      >
        Book a Call
      </a>
    </nav>
  );
}
