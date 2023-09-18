import './global_styles/variables.scss'
import './global_styles/reset.scss'
import './global_styles/typography.scss'
import './global_styles/layouts.scss'
import './global_styles/buttons.scss'
import { Montserrat } from 'next/font/google'

// Components
import Navbar from './components/Header/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Sam Smyth',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
