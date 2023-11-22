import { useState } from 'react';
import Image from 'next/image';
import classes from './visionDetail.module.css';
import close from '../../assets/close.png';
import open from '../../assets/open.png';


interface VisionDetailProps {
    title: string;
    image: any;
    description: string;
}

const VisionDetail: React.FC<VisionDetailProps> = (props) => {
    const [showDetail, setShowDetail] = useState(false);

    function showDetailHandler(){
        setShowDetail(show=>!show)
    };

    let content= close;
    if(showDetail){
        content= open
    };
    return (
        <main className={classes.container}>
                <div className={classes.details}>
                    <Image src={props.image} alt={props.title} className={classes.image}/>
                    <h4>{props.title}</h4>
                    <Image src={content} alt='show detail controller' onClick={showDetailHandler} className={classes.img}/>
                </div>
                {showDetail && <p className={classes.description}>{props.description}</p>}
        </main>
    )
}

export default VisionDetail;