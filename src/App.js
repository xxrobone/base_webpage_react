import React, {useState} from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import NavItem from './components/nav/NavItem';
import Logo from './components/logo/Logo';
import { navData } from './data/pageData';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';

function App() {
    const [active, setActive] = useState(false)
  return (
    <div className='App'>
       <Header>
        <Logo />
        <Nav active={active} setActive={setActive}>
          {navData.map(({ title, path, cls, id }) => (
            <NavItem title={title} path={path} cls={cls} key={id} />
          ))}
        </Nav>
      </Header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
