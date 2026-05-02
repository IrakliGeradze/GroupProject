import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Header(){
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    function goTo() {
        navigate('/payments');
    }
    function closeMenu() {
        setMenuOpen(false);
    }
    return(
        <>
            <div className="header" style={{zIndex: menuOpen ? 998 : 1000}}>
                <div className="first">
                    <h1><Link id='team1' to={'/'}>Team 1</Link></h1>
                </div>
                <div className="middle">
                    <Link to="/" style={{textDecoration:'none', color:'inherit'}}><h1>Home</h1></Link>
                    <Link to="/features" style={{textDecoration:'none', color:'inherit'}}><h1>Features</h1></Link>
                    <Link to="/blog" style={{textDecoration:'none', color:'inherit'}}><h1>Blog</h1></Link>
                </div>
                <div className="end" style={{display:'flex', alignItems:'center', gap:'12px'}}>
                    {!menuOpen && <button onClick={goTo}>Get Started</button>}
                    <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
                        <span/><span/><span/>
                    </button>
                </div>
            </div>
            <div className={`nav-overlay ${menuOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={closeMenu}>✕</button>
                <Link to="/" onClick={closeMenu}>Home</Link>
                <Link to="/features" onClick={closeMenu}>Features</Link>
                <Link to="/blog" onClick={closeMenu}>Blog</Link>
                <button onClick={() => { closeMenu(); goTo(); }} style={{background: 'linear-gradient(90deg, #7c3aed, #a855f7, #D049F0)', color:'white', padding:'10px 30px', border:'none', borderRadius:'12px', fontSize:'20px', cursor:'pointer', fontFamily:'Nunito, sans-serif', fontWeight:'700'}}>Get Started</button>
            </div>
        </>
    )
}

export default Header