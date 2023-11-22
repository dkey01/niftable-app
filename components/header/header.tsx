import classes from './header.module.css';
import NavBar from './navBar';

const Header = () => {
    return (
        <header className={classes.container}>
            <NavBar />
            <section className={classes.header}>
                <h2>THE WORLD'S FIRST PLATFORM FOR TOKENIZING AI BLOCKCHAIN PROJECTS</h2>
                <p>Hold the Creon Pass NFT and earn passive income from AI Tools</p>
            </section>

        </header>
    )
}
export default Header;