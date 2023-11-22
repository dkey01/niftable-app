import { useState, useEffect } from 'react';
import Image from 'next/image';
import classes from './ourVision.module.css';
import vision from '../../assets/vision.png';
import VisionDetail from './visionDetail';
import profitabilityIcon from '../../assets/profitabilityIcon.png';
import earningsIcon from '../../assets/earningsIcon.png';
import launchingIcon from '../../assets/launchingIcon.png';
import limitlessIcon from '../../assets/limitlessIcon.png';

const OurVision = () => {
    const [showVisionImage, setShowVisionImage] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setShowVisionImage(window.innerWidth === 768);
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);

    const visionImage = <Image src={vision} alt='vision-image' className={classes.visionImage}/>;

    const missionDetail = [{
        id: 1,
        title: 'Profitability and Growth',
        image: profitabilityIcon,
        description: 'At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.',
    },
    {
        id: 2,
        title: 'Transparent & Fair Decentralized Earnings',
        image: earningsIcon,
        description: '',
    },
    {
        id: 3,
        title: 'Launching the future',
        image: launchingIcon,
        description: '',
    },
    {
        id: 4,
        title: 'Limitless Posibilities of AI & Crypto',
        image: limitlessIcon,
        description: '',
    }]
    return (
        <main className={classes.mainContainer}>
            <div className={classes.title}>
                <h3>OUR VISION IS TO SUPPORT THE INNOVATION OF AI BLOCKCHAIN PROJECTS <span className={classes.gradient}>WHILE PRIORITIZING COMMUNITIES AND DEMOCRATIZING PROFITS</span></h3>
                {!showVisionImage && visionImage}
            </div>
            <div className={classes.imageIsTrue}>
                <div>
                {missionDetail.map(detail=> (
                    <VisionDetail 
                        key={detail.id} 
                        title={detail.title} 
                        image={detail.image} 
                        description={detail.description}/>               
                ))}
                </div>
                {showVisionImage && visionImage}
            </div>
        </main>
    )
}

export default OurVision;