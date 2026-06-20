import Nav from './components/Nav'
import Hero from './components/Hero'
import Logos from './components/Logos'
import About from './components/About'
import Services from './components/Services'
import Stats from './components/Stats'
import WhyUs from './components/WhyUs'
import Statement from './components/Statement'
import CaseStudies from './components/CaseStudies'
import ARSection from './components/ARSection'
import Process from './components/Process'
import Founder from './components/Founder'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <div className="site-wrap site-wrap--ready">
        <Nav />
        <main>
          <Hero />
          <Stats />
          <Logos />
          <About />
          <Services />
          <WhyUs />
          <Statement />
          <CaseStudies />
          <ARSection />
          <Process />
          <Founder />
          <Contact />
        </main>
      </div>
    </>
  )
}
