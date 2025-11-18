import { Menu, Flame, Podcast, BookOpenText, Video, Home } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `inline-flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
    isActive ? 'bg-fuchsia-600/20 text-white' : 'text-fuchsia-200 hover:text-white hover:bg-white/5'
  }`

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 grid place-items-center text-white shadow-lg shadow-fuchsia-500/30">
            <Flame className="w-5 h-5" />
          </div>
          <span className="text-white font-semibold text-lg tracking-tight group-hover:text-fuchsia-200 transition-colors">Dev Done</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass} end>
            <Home className="w-4 h-4" /> Home
          </NavLink>
          <NavLink to="/podcast" className={navLinkClass}>
            <Podcast className="w-4 h-4" /> Podcast
          </NavLink>
          <NavLink to="/blog" className={navLinkClass}>
            <BookOpenText className="w-4 h-4" /> Blog
          </NavLink>
          <NavLink to="/meetups" className={navLinkClass}>
            <Video className="w-4 h-4" /> Meetups
          </NavLink>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-fuchsia-200 hover:text-white hover:bg-white/5 transition-colors" aria-label="Open menu">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
