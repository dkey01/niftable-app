import Image from 'next/image';
import classes from './creonItem.module.css';
import Card from '../UI/card';

interface CreonItemProps{
    title: string,
    subTitle: string,
    image: any,
    description: string
}

const CreonItem : React.FC<CreonItemProps> = ({title, subTitle, image, description}) => {
    return (
        <Card>
            <main>
                <button className={classes.button}>COMING SOON</button>
                <div className={classes.titleContainer}>
                    <h3 className={classes.title}>{title}</h3>
                    <p className={classes.subTitle}>{subTitle}</p>
                </div>
                <div>
                    <Image src={image} alt={title} className={classes.image}/>
                </div>
                <div>
                    <p className={classes.description}>{description}</p>
                </div>
            </main>
        </Card>

    )
}

export default CreonItem;