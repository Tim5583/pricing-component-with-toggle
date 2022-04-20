import "../style/card.css";

const Card = ({data, parmentOpt}) => {
    const {plan, price , storage, allowedUsers, limit} = data;
    let clz = "card ";
    if (plan === "professional") {
        clz += "pro"
    }
    return ( 
        <div className={clz}>
            <h2 className="plan">{plan}</h2>
            <p className="price"><span className="dollorSign">$</span>{price[parmentOpt]}</p>
            <p className="storage">{storage} Storage</p>
            <p className="usersAllow">{allowedUsers} Users Allowed</p>
            <p className="limit">Send up to {limit}</p>
            <button className="btn">Learn More</button>
        </div>
     );
}
 
export default Card;