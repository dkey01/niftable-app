import { useState, useEffect } from 'react';
import Image from 'next/image';
import classes from './creonPass.module.css';
import creonPass from '../../assets/creonPass.png';
import darkBackground from '../../assets/darkBackground.png';

const CreonPass = () => {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setShowImage(window.innerWidth <= 375);
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      const image = (
            <div className={classes.mainImage}>
                <Image src={creonPass} alt='Main image' />
                <div className={classes.imageContainer}>
                    <Image src={darkBackground} alt='image-background' />
                </div>
            </div>
      )
    return (
        <main className={classes.mainContainer}>
            <div className={classes.creonPass}>
                <h2>CREON PASS NFT</h2>
                <p className={classes.paragraph}>The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools</p>
                {showImage && image}
                <div className={classes.details}>
                    <p>Pre-launch investment opportunities for upcoming AI projects</p>
                    <p>Free and early access to Creon built AI projects</p>
                    <p>Higher allocation limits on the Creon AI Launchpad</p>
                    <p>Revenue share distribution from Creon built AI projects</p>
                </div>
                <button>Buy Creon Pass</button>
            </div>
            {!showImage && image}
        </main>
    )
}

export default CreonPass;