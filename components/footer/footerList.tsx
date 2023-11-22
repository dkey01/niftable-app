import classes from './footerList.module.css';
import prospects from '../../assets/prospects.png';
import tools from '../../assets/tools.png';
import crypto from '../../assets/crypto.png';
import InfoItem from './footerItem';
import FooterBase from './footerBase';

const Footer = () =>{
    const footerItems = [{
        id: 1,
        title: 'AI PROSPECTS, MARKET SIZE, AND DEVELOPEMENT PACE',
        description: 'The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.',
        image: prospects
    },
    {
        id: 2,
        title: 'AI TOOLS AND MARKET',
        description: 'AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.',
        image: tools
    },
    {
        id: 3,
        title: 'AI, CRYPTO, AND NFT MARKET',
        description: 'Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.',
        image: crypto
    }]
    return (
        <footer className={classes.mainContainer}>
            <ul className={classes.items}>
                {footerItems.map(item => (
                    <InfoItem 
                        key={item.id}
                        title={item.title} 
                        description={item.description}
                        image={item.image}
                    />        
                ))}
            </ul>
            <FooterBase />
        </footer>
    )
};

export default Footer;