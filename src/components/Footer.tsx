export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-surface-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-6 text-zinc-700">Kartik<br/>Chaurasiya</h2>
          <p className="text-zinc-500 text-sm">© 2024 Kartik Chaurasiya. All rights reserved.</p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Links</h4>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Work</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Socials</h4>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li><a href="https://linkedin.com/in/kartik-chaurasiya" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="mailto:kartikchaurasiya2710@gmail.com" className="hover:text-white transition-colors">Email</a></li>
            <li><span className="text-zinc-500">+91 9555900866</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
