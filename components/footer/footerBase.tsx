import { useState, useEffect } from 'react';
import Image from 'next/image';
import classes from './footerBase.module.css';
import telegram from '../../assets/telegram.png';
import discord from '../../assets/discord.png';
import twitter from '../../assets/twitter.png';
import niftablesLogo from '../../assets/niftablesLogo.png';

const FooterBase = () => {
    const [showFooterImage, setShowFooterImage] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setShowFooterImage(window.innerWidth <= 375);
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const img = (
        <div className={classes.icons}>
            <Image src={telegram} alt='Telegram'/>
            <Image src={discord} alt='Discord'/>
            <Image src={twitter} alt='Twitter'/>
        </div>
      )
    return (
        <section className={classes.mainContainer}>
            {showFooterImage && img}
            <div className={classes.iconsContainer}>
                <p className={classes.rights}>© Creon 2023. All rights reserved.</p>
                {!showFooterImage && img}
            </div>
            <div>
                <Image src={niftablesLogo} alt='Niftables Logo'/>
            </div>
        </section>
    )
}

export default FooterBase;