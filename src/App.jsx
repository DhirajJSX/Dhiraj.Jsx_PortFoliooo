import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection'
import ProjectSection from './Components/ProjectSection/ProjecSection'
import AboutSection from './Components/AboutSection/AboutSection'
import SkillSection from './Components/SkillSection/SkillSection'
function App() {

  return (
    <>
      <Header /> 
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <Footer />
    </>
  )
}

export default App