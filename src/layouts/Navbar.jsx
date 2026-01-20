import logoImage from '../assets/Logomark.png';
function Navbar() {
    return (
        <section className="main-header">
            <div className="container">
                <div className='header-container'>
                    <div className="header-list inline-center">
                        <ul>
                            <li>
                                Pages
                            </li>
                            <li>
                                Components
                            </li>
                        </ul>
                    </div>
                    <div className="logo inline-center">
                        <div >
                            <a href="/" className='rm-style inline-center'>
                                <img src={logoImage} alt="" />
                                <span>
                                    TailGrids
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="header-btns inline-center">
                        <div>
                            <a className='sign-in rm-style' href="">Sign In</a>
                            <a className='sign-up rm-style' href="">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar