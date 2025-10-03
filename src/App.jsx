import './App.css'
import Banner from './components/Banner/Banner';
import Caring from './components/Caring/Caring';
import Client from './components/Client/Client';
import Design from './components/Design/Design';
import Desing2 from './components/Design2/Desing2';
import Footer from './components/Footer/Footer';
import Frin from './components/Frin/Frin';
import Helping from './components/Helping/Helping';
import Manage from './components/Manage/Manage';
import Navbar from './components/Navbar/Navbar';
import Unseen from './components/Unseen/Unseen';

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Client></Client>
      <Manage></Manage>
      <Unseen></Unseen>
      <Helping></Helping>
      <Design></Design>
      <Desing2></Desing2>
      <Caring></Caring>
      <Frin></Frin>
      <Footer></Footer>
    </>
  )
}

export default App
