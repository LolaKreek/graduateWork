import AlternativeSystems from "../../layouts/AlternativeSystems";
import "./styles.css";

const Footer = () => {
    return(
        <div className="footer__main-container">
            <div className="footer-main-container__first-part">
                <div className="footer-first-part__stay-connected">
                    <div>
                        <h3 className="footer__left-header footer__main-headers">Stay connected</h3>
                    </div>
                    
                    <div className="footer-stay-connected__content-container">
                        <p className="footer__stay-paragraph">Join over 1500 people who joined our 
                            learning and testing platform</p>
                        <div className="footer__inputs-sing-in">
                            <input className="footer-inputs__email" type="email" placeholder="Email address"></input>
                            <input className="footer-inputs__submit" type="submit" value="Sign-Up"></input>
                        </div>

                        <div className="footer__alternative-systems">
                            <AlternativeSystems />
                        </div>
                    </div>
                </div>

                <div className="footer-first-part__commited-to-poland">
                    <div>
                        <h3 className="footer-commited-header footer__main-headers">Commited to Poland</h3>
                    </div>

                    <div className="footer-commited__text-container">
                        <div className="footer-commited__text-part">
                            <p className="footer-commited__text">Quiz is a proud member of the Poland community. We strive to 
                                educate and collaborate with like-minded people to make a difference 
                                educational and socially. Let's collaborate.</p>
                            <p className="footer-commited__more-about">More about out status</p>
                        </div>
                    </div>
                </div>

                <div className="footer-first-part__navigate">
                    <div className="footer-navigate__header">
                        <h3 className="footer__main-headers">Navigate</h3>
                    </div>
                    
                    <div className="footer-navigate__links-list">
                        <div className="footer-links-list__first-part">
                            <p>Portfolio</p>
                            <p>Web disign & Development</p>
                            <p>About us</p>
                            <p>Our Team</p>
                            <p>Blog</p>
                        </div>
                        
                        <div className="footer-links-list__second-part">
                            <p>Events</p>
                            <p>Support</p>
                            <p>Hosting</p>
                            <p>Careers</p>
                            <p>Contact us</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__separative-line"></div>

            <div className="footer-main-container__second-part">
                <p className="footer-second-part__quiz">Quiz Media Studios</p>
                <p className="footer-second-part__adres">3 maja 54, Siedlce 08-110, Poland</p>
                <p className="footer-second-part__map">Map</p>
                <p className="footer-second-part__tel">tel. 123-123-123</p>
                <p className="footer-second-part__support">Support tel. 123-123-123</p>
            </div>

            <div className="footer__separative-line"></div>

            <div className="footer-main-container__third-part">
                <p className="footer-third-part__privacy-policy">Privacy Policy</p>
                <p className="footer-third-part__sitemap">Sitemap</p>
                <p className="footer-third-part__quiz">© 2024 Quiz Media Studios</p>
            </div>
        </div>
    )
}

export default Footer;