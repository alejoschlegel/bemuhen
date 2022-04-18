import "../App.css";
export default function Nav() {
    return (
        <div className="nav">
            <a href="#">
                <h3>Home</h3>
            </a>
            <a href="#">
                <h3>Products</h3>
            </a>
            <a href="#">
                <h3>About</h3>
            </a>
            <a href="#">
                <h3>Location</h3>
            </a>
            <a href="#">
                <h3>Cart</h3>
            </a>
            <a href="#">
            <span class="material-icons-sharp">search</span>
            </a>
        </div>
    );
}