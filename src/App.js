import './App.css'
import {Navbar, Footer, SideLinks, SideMail} from './Components'
import {Hero, Achie, Employment, Cocum, Projects, Marks} from './Page'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Employment/>
      <Achie/>
      <Marks/>
      <Cocum/>
      <Projects/>
      <Footer/>
      <SideLinks fb='https://www.facebook.com/eeshandutta.great' insta='https://www.instagram.com/eeshan_dutta/' linkedIn='https://www.linkedin.com/in/eeshan-dutta-03508a1b5/' github='https://github.com/EeshanDutta007' />
      <SideMail mail='mailto:eeshandutta21@gmail.com' />
    </div>
  )
}

export default App
