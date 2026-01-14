import { Search } from "lucide-react";

function Footer() {
    return (
        <section className='container main-footer'>
            <div className='sub-container'>
                <div>
                    <a href="/" className='logo'>LOGO</a>
                    <div>
                        <p>Sign up to our newsletter to get the latest Solaire Resort deals and updates.</p>
                    </div>
                    <div>
                        <input type="search" placeholder='Value'/>
                        <Search className="search-icon"/>
                    </div>
                </div>
                <div>
                    <div>
                        <p className='small-title'>Pages</p>
                        <div className='pl-1'>
                            <p>Pages 1</p>
                            <p>Pages 2</p>
                            <p>Pages 3</p>
                        </div>
                    </div>
                    <div>
                        <p className='small-title'>
                            Typography
                        </p>
                    </div>
                    <div>
                        <p className='small-title'>
                            Components
                        </p>
                        <div className='pl-1'>
                            <p>Components 1</p>
                            <p>Components 2</p>
                            <p>Components 3</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer