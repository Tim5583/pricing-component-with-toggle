const Header = (props) => {
    return ( 
        <header>
            <h1>Our Pricing</h1>
            <div>
                <p>Annually</p>
                <input type="checkbox" id="pricing"/>
                <label htmlFor="pricing"></label>
                <p>Monthly</p>
            </div>
        </header>
     );
}
 
export default Header;