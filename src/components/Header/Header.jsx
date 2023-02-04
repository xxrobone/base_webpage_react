import React, {useState} from 'react';
import office from '../../videos/office.mp4'

// styles
import './Header.scss'
import Nav from '../nav/Nav';
import NavItem from '../nav/NavItem';

const Header = ({navData, pageData}) => {
   const [active, setActive] = useState(false)
    return (
        <React.Fragment>
      
          <header id="home">
             
          <video autoPlay loop muted
                    style={{
                       position: "absolute",
                       top: '0',
                       left: '0',
                        width: "100%",
                        height: "80%",
                        zIndex: "-1",
                        objectFit: "cover",

                    }}
                >
                    <source src={office} type="video/mp4" />
             </video>
             
             <Nav active={active} setActive={setActive} >
                {navData.map(({title, cls, path, id}) => (
                   <NavItem title={title} cls={cls} path={path} key={id} />
                ))}
               
             </Nav>
         
        {/*  <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>
 */}
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I am {pageData.name}.</h1>
               <h3>{pageData.description}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    pageData.socialLinks && pageData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel='noopener noreferrer'><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
}
export default Header;

