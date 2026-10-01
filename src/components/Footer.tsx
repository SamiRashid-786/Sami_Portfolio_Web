import { Github, Linkedin } from "./Icons";

export default function Footer() {
  return (
    <footer id="contact" className="py-40 px-6 text-center bg-[#050505] relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black uppercase tracking-tighter text-white mb-12 leading-[1]">
          Ready to Scale <br /> <span className="text-orange-500">Intelligence?</span>
        </h2>

        <div className="flex items-center justify-center gap-3 mb-16">
          <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)] animate-pulse" />
          <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">Status: Accepting New Clients</span>
        </div>

        <a
          href="mailto:samirashidferoz@gmail.com?subject=Discovery Call: AI Automation & Architecture&body=Hi Sami,%0A%0AI was looking through your architectures and I'm interested in scaling AI for my business. I'd love to book a discovery call to discuss potential synergies.%0A%0ABest,%0A[Your Name]"
          className="inline-block px-12 py-6 rounded-sm bg-orange-500 text-[#050505] font-black text-xl tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] hover:bg-orange-400 mb-20"
        >
          Book a Discovery Call
        </a>

        <div className="flex gap-8 items-center justify-center">
          <a
            href="https://github.com/samirashid-786"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <Github className="w-8 h-8" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
