import SocialIcons from "./SocialIcons";

export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">natasha.</a>
        <ul>
            <li className="active">
             <a href=".components/portfolio">portfolio</a>
            </li>
            <li>
            <a href="/about me">about me</a>
            </li>
            <li>
            <a href="/my blog">myblog</a>
            </li>
            <li>
            <a href="/reviews">reviews</a>
            </li>
            <li>
            <a href="/contact me">contactme</a>
            </li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://www.slack.com" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-slack"></i>
            </a>
            
        </ul>
        
    </nav>
}
