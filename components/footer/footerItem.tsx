import { useState, useEffect } from 'react';
import Image from 'next/image';
import classes from './footerItem.module.css';
import Card from '../UI/card';

interface CreonItemProps{
    title: string,
    description: string,
    image: any
}

const FooterItem : React.FC<CreonItemProps> = ({title, image, description}) => {
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

      const footerImage = (
        <div className={classes.image}>
            <Image src={image} alt={title} />
        </div>
      )
    return (
        <Card>
            <main className={classes.mainContainer}>
                {showFooterImage && footerImage} 
                <div className={classes.titleContainer}>
                    <h3 className={classes.title}>{title}</h3>
                    <p className={classes.description}>{description}</p>
                </div>
                {!showFooterImage && footerImage}
            </main>
        </Card>
    )
};

export default FooterItem;