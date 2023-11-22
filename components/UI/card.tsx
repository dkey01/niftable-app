import classes from './card.module.css';

interface CardProps {
    children: any
}
const Card : React.FC<CardProps> = (props) => {

    return <div className={classes.card}>{props.children}</div>
}

export default Card;