import { PenTool } from 'lucide-react'

const posts = [
  { id: 1, title: 'Magenta-Driven Development', summary: 'Why committing to a playful palette improves your shipping cadence.' },
  { id: 2, title: 'The Joyful Stack', summary: 'Tools and tricks to keep your developer life fun.' },
  { id: 3, title: 'Meetups to Mastery', summary: 'How sharing on stage accelerates learning.' },
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 grid place-items-center">
            <PenTool className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-bold">Blog Posts</h1>
        </div>
        <ul className="grid md:grid-cols-2 gap-5">
          {posts.map(p => (
            <li key={p.id} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-xl">{p.title}</h3>
              <p className="text-fuchsia-200/80 mt-1">{p.summary}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-fuchsia-300 hover:text-fuchsia-200">Read →</button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
