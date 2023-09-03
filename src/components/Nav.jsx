import React, { useEffect, useState } from 'react'
import { headerLogo } from '../assets/images'
import { hamburger, moon } from '../assets/icons'
import { darkModeToogle, navLinks } from '../constants'

const Nav = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light-mode');

    const [open, setOpen] = useState(true);

    const element = document.documentElement;
    const checkMode = window.matchMedia("(prefers-color-scheme: dark)");

    function checkScroll() {
        if (!open) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "scroll";
        }
    }
    checkScroll();

    function setDarkModeToggle() {
        if (localStorage.theme === 'dark-mode' || (!("theme" in localStorage) && checkMode.matches))
        {
            element.classList.add("dark");
        }
        else {
            element.classList.remove("dark");
        }
    }
    setDarkModeToggle();

    useEffect(() => {
        switch (theme) {
            case 'dark-mode':
                element.classList.add('dark');
                localStorage.setItem('theme', 'dark-mode');
                break;
            case 'light-mode':
                element.classList.remove('dark');
                localStorage.setItem('theme', 'light-mode');
                break;
            default:
                localStorage.removeItem('theme');
                setDarkModeToggle();
                break;
        }
    }, [theme]);

    
    // checkMode.addEventListener("change", (e) => {
    //     if (!("theme" in localStorage)) {
    //         if (e.matches) {
    //             element.classList.add("dark");
    //         } else {
    //             element.classList.remove("dark");
    //         }
    //     }
    // })
    
  return (
      <header className='padding-x py-8 absolute z-50 w-full'>
          <nav className='flex justify-between items-center max-container'>
              <a href="/" className=''>
                  <img 
                      src={headerLogo}
                      alt="Logo"
                      width={130}
                      height={29}
                  />
              </a>
              <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                  {navLinks.map((link) => (
                      <li key={link.label}>
                          <a
                              href={link.href}
                              className='font-montserrat leading-normal text-lg text-slate-gray dark:text-coral-red'
                          >
                              {link.label}
                          </a>
                      </li>
                  ))}
                  <div className='flex justify-center cursor-pointer bg-white rounded-full' >
                      { darkModeToogle?.map((item) => (
                        <button id='toogleDark' onClick={()=> setTheme(item.text)} className={`px-1 rounded-xl ${theme === item.text && 'bg-blue-200 duration-300'}`}>
                          <img
                            src={item.src}
                            alt={item.alt}
                            width={24}
                            height={24}
                        />
                        </button>    
                      ))}    
                  </div>  
              </ul>
              <div
                  className={` hidden max-lg:flex flex-col items-center cursor-pointer absolute top-0 right-0 py-8 w-2/3 ${open ? " w-[100px] bg-transparent " : " h-screen bg-slate-900 text-4xl max-sm:text-xl max-sm:w-3/4"} dark:bg-white duration-300`}>
                  <img
                      onClick={()=>setOpen(!open)}
                      src={hamburger}
                      alt='Hambuger'
                      width={25}
                      height={25}
                      className={`absolute right-[35px] top-5 flex ${ open? "invert-0" : "invert"} dark:invert-0`}
                  />
                  <ul className={`${open? 'hidden': 'flex'} justify-center items-center flex-col gap-16 mt-20`}>
                  {navLinks.map((link) => (
                      <li key={link.label}>
                          <a
                              href={link.href}
                              className='font-montserrat leading-normal max-lg:text-xl text-lg text-slate-gray dark:text-coral-red '
                              onClick={()=>setOpen(!open)}
                          >
                              {link.label}
                          </a>
                      </li>
                  ))}
                  <div className='flex justify-center cursor-pointer bg-primary rounded-full'>
                      { darkModeToogle?.map((item) => (
                        <button id='toogleDark' onClick={()=> setTheme(item.text)} className={`px-1 rounded-xl ${theme === item.text && 'bg-blue-200 duration-300'}`}>
                          <img
                            src={item.src}
                            alt={item.alt}
                            width={24}
                            height={24}
                        />
                        </button>    
                      ))}    
                  </div>  
              </ul>
              </div>
          </nav>
    </header>
  )
}

export default Nav