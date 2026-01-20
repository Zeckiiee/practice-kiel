import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import downloadImg from "../assets/download_btn.png";
import heroImg from "../assets/hero_img.png";
import dottedImg from "../assets/dotted_shape.png";
import intelImg from "../assets/intel.png"
import logiTech from "../assets/logitech.png"
import oracle from "../assets/oracle.png"
function MainPage() {
    return (
        <div>
            <Navbar />
            <section className="main-section inline-center">
                <div className="container">
                    <div className="main-section-container">
                        <div className="left-hero-section">
                            <div>
                                <h1 className="header-lg">
                                    The Greatest
                                    Journey Of Online Payment.
                                </h1>
                                <p>
                                    With TailGrids, business and students thrive together. Business can perfectly match their staffing to changing demand throughout the dayed.
                                </p>
                                <div className="header-btn-container">
                                    <a href="" className="rm-style">Get Started</a>
                                    <div>
                                        <a href="" className="rm-style">
                                            <img src={downloadImg} alt="" />
                                            <span>
                                                Download App
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="clients-container">
                                <div>
                                    <p>Some Of Our Clients </p>
                                </div>
                                <div>
                                    <img src={oracle} alt="" />
                                    <img src={intelImg} alt="" />
                                    <img src={logiTech} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="hero-image-container">
                            <img src={heroImg} alt="" />
                        </div>
                        <div className="dotted-img">
                            <img src={dottedImg} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="secondary-section inline-center">
                <div className="container">
                    <div className="blog-container">
                        <div className="blog-header">
                            <p>Our Blogs</p>
                            <h2 className="header-md">Our Recent News</h2>
                            <p>There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.</p>
                        </div>
                        <div className="card-gallery">

                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </div>
    )
}

export default MainPage