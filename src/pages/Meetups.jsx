import { Video } from 'lucide-react'

const talks = [
  { id: 1, title: 'Build Fast, Laugh Faster', speaker: 'Kai Kode', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { id: 2, title: 'UI That Smiles Back', speaker: 'Mina Mono', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  { id: 3, title: 'DX Is A Feature', speaker: 'Neo Node', url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
]

export default function Meetups() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-600 grid place-items-center">
            <Video className="w-5 h-5" />
          </div>
          <h1 className="text-3xl font-bold">Meetup Videos</h1>
        </div>
        <ul className="space-y-4">
          {talks.map(t => (
            <li key={t.id} className="rounded-xl border border-white/10 bg-white/5 p-5 flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{t.title}</h3>
                <p className="text-sm text-fuchsia-200/80">Speaker: {t.speaker}</p>
              </div>
              <a className="text-fuchsia-300 hover:text-fuchsia-200" href={t.url} target="_blank" rel="noreferrer">Watch →</a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
