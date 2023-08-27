import './App.css';
import Card from './components/card';
import Navbar from './components/navbar';
import Login from './components/login';
import Section from './components/section';
import Typecars from './components/typecars';
import bg from '../src/images/bg.png'
import bg2 from '../src/images/c-2.png'
import bbg1 from '../src/images/bbg1.png'
// import StateExample from './components/stateExample';
import Servercall from './components/useEffect';
import ClassExample from './components/classexample';
import StateExample from './components/stateExample';
import Form from '../src/components/form';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '.src/components/redux/store';
import Counter from '.src/components/redux/counter';
import Counter from './src/components/redux/Counter';


function App() {
  return (
    // // <div className="parent">
    //   {/* <Card />
    //   <Navbar />
    //   <Login />
    //   <Section />
    //   <div className='cars-1'>
    //     <Typecars img={bg} header="Choose Your Car" para="It is a long established fact that a reader will be distracted by the readable content of a page when" but="Read More" />
    //     <Typecars img={bg2} header="Get Your Car" para="It is a long established fact that a reader will be distracted by the readable content of a page when" but="Read More" />
    //     <Typecars img={bbg1} header="Contact Your Dealer" para="It is a long established fact that a reader will be distracted by the readable content of a page when" but="Read More" />
    //   // </div> */}
    // {/* <StateExample/> */}
    //  {/* <Servercall/>  */}
    //  {/* <ClassExample/> */}
    //  {/* <Form/> */}




    // </div>
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Counter/>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          {/* <Link to="/bret">bret</Link> */}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/bret" element={<bret />}></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>

  );

}
export default App;
