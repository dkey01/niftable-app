import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import openMenu from '../../assets/openMenu.png';
import logo from '../../assets/logo.png';
import closeMenu from '../../assets/closeMenu.png';
import classes from './navBar.module.css';
import telegram from '../../assets/telegram.png';
import discord from '../../assets/discord.png';
import twitter from '../../assets/twitter.png';

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [menu, setMenu] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMenu(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleNav = () => {
    setShowNav(!showNav);
    setMenu(!menu);
    setFullScreen(!fullScreen);
  };

  const handleNavClick = () => {
    if (isMenu) {
      setMenu(false);
      setShowNav(false);
      setFullScreen(false);
    }
  };

  const menuButton = (
    <div className={classes['menu-btn']} onClick={toggleNav}>
      {menu ? <Image src={closeMenu} alt='open' /> : <Image src={openMenu} alt='close' />}
    </div>
  )

  const socialIcons = (
    <div className={classes.icons}>
      <Image src={telegram} alt='telegram'/>
      <Image src={discord} alt='discord'/>
      <Image src={twitter} alt='twitter'/>
    </div>
  )

  const button = <button className={classes.button}>Connect</button>;

  return (
    <nav className={`${classes.navbar} ${fullScreen ? classes['full-screen'] : ''}`}>
      <div>
          <Image src={logo} alt='Logo'/>
      </div>
      <div className={classes['navbar-content']}>
        <span>{isMenu && button}</span>
        <span>{isMenu && menuButton}</span>
        <ul className={`${classes['navbar-nav']} ${showNav ? classes['show-nav'] : ''}`}>
          <div className={classes.menuScreen}>
            {fullScreen && button}
            {fullScreen && menuButton}
          </div>
          <li className={classes['nav-item']}>
            <a href='#' onClick={handleNavClick}>Creon pass</a>
          </li>
          <li className={classes['nav-item']}>
            <a href='#' onClick={handleNavClick}>Token</a><button className={classes.tokenButton}>SOON</button>
          </li>
          <li className={classes['nav-item']}>
            <a href='#' onClick={handleNavClick}>AI Revenue</a><button className={classes.revenueButton}>SOON</button>
          </li>
          <li className={classes['nav-item']}>
            <a href='#' onClick={handleNavClick}>AI Launchpad</a><button className={classes.launchpadButton}>SOON</button>
          </li>
          {fullScreen && socialIcons}
        </ul>
        {!isMenu && button}
      </div>
    </nav>
  );
};

export default NavBar;