import Link from 'next/link'

type Project = {
  id: string
  title: string
  description: string
  tech?: string[]
  link?: string
  github?: string
}

export default function ProjectCard({ id, title, description, tech, link, github }: Project) {
  return (
    <article className="border rounded-lg p-5 hover:shadow-md transition">
      <h3 className="text-xl font-semibold">
        <Link href={`/projects/${id}`}>{title}</Link>
      </h3>
      <p className="text-gray-600 mt-2">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech?.map(t => (
          <span key={t} className="text-xs px-2 py-1 border rounded-full">{t}</span>
        ))}
      </div>

      <div className="mt-4 flex gap-3">
        {link && <a href={link} target="_blank" rel="noreferrer" className="text-sm underline">Live</a>}
        {github && <a href={github} target="_blank" rel="noreferrer" className="text-sm underline">Code</a>}
      </div>
    </article>
  )
}
