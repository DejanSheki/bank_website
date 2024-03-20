import './App.css'

import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import Info from './components/Info';
import Explore from './components/Explore';
import ChoosUs from './components/ChooseUs';
import Carousel from './components/Carousel';
import Testimonials from './components/Testimonials';


function App() {

  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Nav />
      <HeroSection />
      <Info />
      <Explore />
      <ChoosUs />
      <Carousel />
      <Testimonials />
    </div>
  )
}

export default App
