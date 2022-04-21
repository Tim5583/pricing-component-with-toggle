import "../style/header.css";

const Header = (props) => {
    return ( 
        <header className="header">
            <h1>Our Pricing</h1>
            <div className="switch">
                <p className="switchLabels">Annually</p>
                <input type="checkbox" id="pricing"/>
                <label htmlFor="pricing" className="pricingLabel" onClick={props.setParmentOpt}>
                    <span className="circle"></span>
                </label>
                <p className="switchLabels">Monthly</p>
            </div>
        </header>
     );
}
 
export default Header;
