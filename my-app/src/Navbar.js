export default function Navbar(){
    return (
    <nav className="nav">
        <a href="/" className="site-title">Home</a>
        <ul>
            <li>
                <a href="/login">login</a>
            </li>
            <li>
                <a href="/overview">overview</a>
            </li>
            <li>
                <a href="/contact">contact</a>
            </li>
        </ul>
    </nav>
    )
}