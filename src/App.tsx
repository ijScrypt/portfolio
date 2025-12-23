import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
      
      <div className="h-20"></div> 
    </div>
  )
}

export default App