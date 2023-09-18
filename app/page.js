// Components
import ContactForm from './components/ContactForm/ContactForm';
import HeroBanner from './components/HeroBanner/HeroBanner'
import SkillsBars from './components/SkillsBars/SkillsBars'


export const metadata = {
  title: "Sam Smyth | Marketing and Web Specialist - Victoria BC",
  description: "Sam Smyth | Marketing and Web Specialist - Victoria BC",
};


export default function Home() {
  return (
    <main>
      <HeroBanner />
      <SkillsBars />
      <ContactForm />
    </main>
  )
}
