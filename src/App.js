import logo from './logo.svg';
import './App.css';
import MainHeader from './components/headers/mainHeader';
import { MainContent } from './components/content/mainContent';
import { SecondHeader } from './components/headers/secondHeader';
import { SecondContent } from './components/content/secondContent';
import RowCards from './components/cards/rowCards';
import ContactForm from './components/forms/contactForm';
import Footer from './components/footers/mainFooter';
import { router } from './routes/router';
import { RouterProvider } from "react-router-dom";


function App() {
  return (
    <RouterProvider router={router} />

    
  );
}

export default App;


{
  /* <div className="App">

      <MainHeader />
      <MainContent />
      <SecondHeader />
      <RowCards/>
      <SecondContent/>
      <ContactForm/>
      <Footer/>
      
      
    </div> */
}
