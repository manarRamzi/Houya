
import './Style.css';
import NavBar from './components/NavBar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
function App() {
  return (
    <div >
      <NavBar/>
      <div className='main'>
      <Main/>
      </div>
    <Footer/>
     
    </div>
  );
}

export default App;
