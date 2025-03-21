'use client'
import Link from 'next/link'
import ThemeToggle from './theme'

const navItems = {

  '/': {
    name: 'B급보고',
  },
  '/blog': {
    name: 'Article',
  },
  '/about': {
    name: 'About Us'
  },
  '/contact': {
    name: 'Contact'
  },
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-6 tracking-tight">
      <div className="lg:top-20">
        <nav
          className="flex flex-row items-end relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row items-end space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 ${name === 'B급보고' ? 'font-bold text-3xl' : ''
                    }`}
                >
                  {name}
                </Link>
              )
            })}
          </div>
          <div className='ml-auto flex items-center'>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  )
}
