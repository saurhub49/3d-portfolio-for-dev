import React, { useCallback, useState } from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import NavbarLink from '../constants/enums'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'
import { NavLink } from '../constants/types'

const Navbar: React.FC = () => {
  const [active, setActive] = useState<NavbarLink>(NavbarLink.DEFAULT);
  const [toggle, setToggle] = useState<boolean>(false);

  const onClickLinkHandler = useCallback(
    (event: React.MouseEvent) => {
      const id = event.currentTarget.ariaLabel as NavbarLink;
      setActive(id);
      if (id == NavbarLink.DEFAULT) {
        window.scrollTo(0, 0);
      }
    },
    [],
  );

  const onClickToggle = useCallback(() => {
    setToggle(!toggle)
  }, [toggle]);

  const onClickMobileLinkHandler = useCallback(
    (event: React.MouseEvent) => {
      const id = event.currentTarget.ariaLabel as NavbarLink;
      setActive(id);
      onClickToggle();
      if (id == NavbarLink.DEFAULT) {
        window.scrollTo(0, 0);
      }
    },
    [onClickToggle],
  );

  return (
    <nav
      className={`
    ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary
    `}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          aria-label={NavbarLink.DEFAULT.toLowerCase()}
          to="/"
          className='flex items-center gap-2'
          onClick={onClickLinkHandler}
        >
          <img src={logo} alt={logo} className="w-9 h-9 object-contain" />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Saurabh &nbsp;
            <span className='sm:block hidden'>
              Mahajan | Portfolio
            </span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map((link: NavLink) => (
              <li
                aria-label={link.id}
                key={link.id}
                className={`${active == link.id
                  ? 'text-white'
                  : 'text-secondary'
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={onClickLinkHandler}
              >
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))
          }
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={onClickToggle}
          />
          {toggle && <div className='flex p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl'>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {
                navLinks.map((link: NavLink) => (
                  <li
                    aria-label={link.id}
                    key={link.id}
                    className={`${active == link.id
                      ? 'text-white'
                      : 'text-secondary'
                      } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={onClickMobileLinkHandler}
                  >
                    <a href={`#${link.id}`}>
                      {link.title}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>}
        </div>
      </div>
    </nav>
  )
};

export default Navbar