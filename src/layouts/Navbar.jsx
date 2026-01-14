import { ChevronDown } from "lucide-react";
function Navbar() {
    return (
        <div className='navbar-container'>
            <a className="logo pl-2" href="">LOGO</a>
            <div className="nav-links">
                <ul>
                    <li>
                        Pages <ChevronDown size={18} />
                        <div className="pages-modal">
                            <div>
                                <ul>
                                    <li>Page1</li>
                                    <li>Page2</li>
                                    <li>Page3</li>
                                    <li>Page4</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>Typography</li>
                    <li>
                        Components <ChevronDown size={18} />
                        <div className="components-modal">
                            <div className="components-links">
                                <div>
                                    <a href="">Component 1</a>
                                    <a href="">Component 2</a>
                                </div>
                                <div>
                                    <a href="">Component 3</a>
                                    <a href="">Component 4</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
            </div>



        </div>
    )
}

export default Navbar