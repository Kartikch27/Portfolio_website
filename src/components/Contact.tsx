export default function Contact() {
  return (
    <section className="py-32 px-6 text-center border-t border-border bg-gradient-to-b from-transparent to-primary/5">
      <h2 className="text-5xl md:text-7xl font-bold mb-6">Drop Me a Line</h2>
      <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
        Got a project in mind or just want to say hi? I'm always up for a chat about AI, ML, or Full Stack development.
      </p>
      <a 
        href="mailto:kartikchaurasiya2710@gmail.com"
        className="inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform"
      >
        Book an Intro Call
      </a>
      <p className="mt-6 text-sm text-zinc-500">No pressure — just a quick chat</p>
    </section>
  );
}
