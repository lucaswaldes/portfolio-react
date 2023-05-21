import './navbar.css'
export default function Navbar () {
    return (
      <header className="header">
        <a href="#" className="logo">Lucas</a>

        <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Skills</a>
            <a href="#">Contact</a>
        </nav>
      </header>
    )
  }