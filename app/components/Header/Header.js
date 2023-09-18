import styles from './header.module.scss'
import Link from 'next/link'

const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`${styles.header_wrap} width_content`}>
        <h1><Link href="/">Sam Smyth</Link></h1>
        <nav className={styles.main_nav}>
          <ul>
            {links.map((link, index) => {
              let classNames = styles.nav_links;

              if (link.href === "#contact") {
                classNames += ' button button_header';
              }

              return (
                <li key={index}>
                  <Link href={link.href} className={classNames}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}