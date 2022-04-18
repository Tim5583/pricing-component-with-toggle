import "../style/card.css";

const Card = ({data}) => {
    const {plan, price: {annually, monthly}, storage, allowedUsers, limit} = data;
    let clz = "card ";
    if (plan === "professional") {
        clz += "pro"
    }
    return ( 
        <div className={clz}>
            <h2 className="plan">{plan}</h2>
            <p className="price"><span className="dollorSign">$</span>{annually}</p>
            <p className="storage">{storage} Storage</p>
            <p className="usersAllow">{allowedUsers} Users Allowed</p>
            <p className="limit">Send up to {limit}</p>
            <button className="btn">Learn More</button>
        </div>
     );
}
 
export default Card;