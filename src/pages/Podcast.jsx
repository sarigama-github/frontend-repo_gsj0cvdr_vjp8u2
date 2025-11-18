import { Headphones } from 'lucide-react'

const episodes = [
  { id: 1, title: 'Ship It With a Smile', guest: 'Ava Byte', length: '42:18' },
  { id: 2, title: 'Playful Patterns', guest: 'Liam Logic', length: '36:02' },
  { id: 3, title: 'Debugging Joy', guest: 'Zoe Zero', length: '55:10' },
]

export default function Podcast() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 grid place-items-center">
            <Headphones className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-bold">Podcast Episodes</h1>
        </div>
        <ul className="space-y-4">
          {episodes.map(ep => (
            <li key={ep.id} className="rounded-xl border border-white/10 bg-white/5 p-5 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{ep.title}</h3>
                <p className="text-sm text-fuchsia-200/80">Guest: {ep.guest}</p>
              </div>
              <div className="text-fuchsia-200/80">{ep.length}</div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
