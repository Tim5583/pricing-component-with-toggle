import classes from "../style/card.module.css";

const Card = ({data}) => {
    const {plan, price: {annually, monthly}, storage, allowedUsers, limit} = data;
    return ( 
        <div className={classes.card}>
            <h2 className={classes.plan}>{plan}</h2>
            <p className={classes.price}><span className={classes.dollorSign}>$</span>{annually}</p>
            <p className={classes.storage}>{storage} Storage</p>
            <p className={classes.usersAllow}>{allowedUsers} Users Allowed</p>
            <p className={classes.limit}>Send up to {limit}</p>
            <button className={classes.btn}>Learn More</button>
        </div>
     );
}
 
export default Card;