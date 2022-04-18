import classes from "../style/header.module.css";

const Header = (props) => {
    return ( 
        <header className={classes.header}>
            <h1>Our Pricing</h1>
            <div className={classes.switch}>
                <p>Annually</p>
                <input type="checkbox" id="pricing"/>
                <label htmlFor="pricing"></label>
                <p>Monthly</p>
            </div>
        </header>
     );
}
 
export default Header;