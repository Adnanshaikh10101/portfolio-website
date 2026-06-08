import "../index.css";
function Navbar(){
    return(
        <nav className="Navbar">
            <p><span>A</span>DNAN<span>S</span>haikh</p>
            <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;