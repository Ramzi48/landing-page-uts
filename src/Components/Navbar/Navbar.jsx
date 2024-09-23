import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
        <a href="/" className="logo">Seputar Pendidikan</a>

        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="#kontak">Contact</a>
        </nav>
    </header>
    
  )
}

export default Navbar