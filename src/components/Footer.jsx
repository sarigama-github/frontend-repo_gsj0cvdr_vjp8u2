export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-fuchsia-100/80">© {new Date().getFullYear()} Dev Done. Built with love and a little mischief.</p>
        <div className="text-fuchsia-200/80">
          Stay playful. Keep shipping.
        </div>
      </div>
    </footer>
  )
}
