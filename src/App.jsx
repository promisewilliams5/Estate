import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
// import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      {/* <ToastContainer/> */}
      <Header/>
      <About/>
      <Projects/>
      {/* <TestimonialsSection/> */}
      <ContactSection/> 
      <Footer/>
    </div>
  )
}

export default App
