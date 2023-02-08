import React, { useState } from 'react';
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

// styles & animations
import { motion as mt } from 'framer-motion';

function App() {
  const [active, setActive] = useState(false);
  return (
    <mt.div className='App'>
      <Header>
        <Logo />
        <Nav active={active} setActive={setActive}>
          {navData.map(({ title, path, cls, id }, i) => (
            <NavItem
              title={title}
              path={path}
              cls={cls}
              key={id}
              i={i}
            />
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
    </mt.div>
  );
}

export default App;
