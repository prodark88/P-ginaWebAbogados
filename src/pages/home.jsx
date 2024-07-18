import React from 'react'
import MainHeader from '../components/headers/mainHeader'
import { MainContent } from '../components/content/mainContent'
import { SecondHeader } from '../components/headers/secondHeader'
import { SecondContent } from '../components/content/secondContent'
import ContactForm from '../components/forms/contactForm'
import Footer from '../components/footers/mainFooter'

function Home() {
  return (
    <div>
        <MainContent/>
        <SecondHeader/>
        <SecondContent/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default Home