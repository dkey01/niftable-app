import Image from 'next/image';
import classes from './profitingThrough.module.css';
import profitingThrough from '../../assets/profitingThrough.png';

const ProfitingThrough = () =>{
    return (
        <main className={classes.mainContainer}>
            <div>
                <h2 className={classes.title}>PROFITING THROUGH</h2>
                <p className={classes.paragraph}>AI INNOVATION & DECENTRALIZATION</p>
            </div>
            <div className={classes.fullDetail}>
                <Image src={profitingThrough} alt='Profiting through image'/>
                <div className={classes.detail}>
                    <h4>The dynamic community driven business model of the future.</h4>
                    <p>At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.</p>
                </div>
            </div>
        </main>
    )
};

export default ProfitingThrough;