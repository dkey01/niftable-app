import classes from './creonList.module.css';
import CreonItem from './creonItem';
import tokenFrame from '../../assets/tokenFrame.png';
import revenueFrame from '../../assets/revenueFrame.png';
import launchpadFrame from '../../assets/launchpadFrame.png';

const CreonList = () => {
    const items = [{
        id: 1,
        title: 'TOKEN',
        subTitle: 'The Gateway token to the world of AI',
        image: tokenFrame,
        description: 'Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.'
      },
      {
        id: 2,
        title: 'REVENUE',
        subTitle: 'Driving income and growth through decentralization',
        image: revenueFrame,
        description: 'CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.'
      },
      {
        id: 3,
        title: 'LAUNCHPAD',
        subTitle: 'Driving the future of AI Innovation',
        image: launchpadFrame,
        description: 'The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.'
      }]
    return (
        <main>
            <ul className={classes.items}>
                {items.map(item => (
                    <CreonItem 
                        key={item.id}
                        title={item.title} 
                        subTitle={item.subTitle} 
                        image={item.image} 
                        description={item.description}/>
                ))}
            </ul>
        </main>
        
    )
}

export default CreonList;