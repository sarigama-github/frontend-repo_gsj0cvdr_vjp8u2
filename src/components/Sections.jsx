import { Podcast, BookOpenText, Video } from 'lucide-react'

function Card({ icon: Icon, title, desc, href }) {
  return (
    <a href={href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-6">
      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-fuchsia-500/10 blur-3xl group-hover:scale-110 transition-transform" />
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white grid place-items-center shadow-lg shadow-fuchsia-500/30">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-white text-xl font-semibold">{title}</h3>
          <p className="text-fuchsia-100/80 mt-1">{desc}</p>
          <span className="inline-block mt-4 text-fuchsia-300 group-hover:text-fuchsia-200">Explore →</span>
        </div>
      </div>
    </a>
  )
}

export default function Sections() {
  return (
    <section id="latest" className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Card icon={Podcast} title="Podcast Episodes" desc="Conversations with creators, builders, and technologists." href="/podcast" />
          <Card icon={BookOpenText} title="Blog Posts" desc="Short, fun reads on code, career, and creativity." href="/blog" />
          <Card icon={Video} title="Meetup Videos" desc="Talks, demos, and highlights from our community meetups." href="/meetups" />
        </div>
      </div>
    </section>
  )
}
