export type Project = {
  id: string
  title: string
  description: string
  tech?: string[]
  link?: string
  github?: string
  long?: string
}

export const projects: Project[] = [
  {
    id: 'expense-tracker',
    title: 'ExpenseTracker',
    description: 'Track daily expenses with Next.js, Tailwind, Clerk, Prisma and Neon.',
    tech: ['Next.js', 'Tailwind', 'Clerk', 'Prisma', 'Neon'],
    link: 'https://my-app-nu-seven-55.vercel.app/',
    github: 'https://github.com/Muhammad-Fakhar-Khan/ExpenseTracker',
    long: 'ExpenseTracker helps users record and visualize their expenses. Built using Next.js App Router, Clerk for auth, Prisma ORM and Neon Postgres for storage.',
  },
  {
    id: 'portfolio-v1',
    title: 'Portfolio (v1)',
    description: 'My original HTML/CSS/JS portfolio — rebuilt in Next.js.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Muhammad-Fakhar-Khan/Portfolio',
  },
  // add yours...
]
