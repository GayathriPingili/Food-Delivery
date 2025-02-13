import { assets } from "../../assets/frontend_assets/assets"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer" id="footer">
         <div className="footer-content">
            <div className="footer-content-left">
               <img src={assets.logo} alt="" />
               <p>lorel ipsum</p>
               <div className="footer-social-icons">
               <img src={assets.facebook_icon} alt="" />
               <img src={assets.twitter_icon} alt="" />
               <img src={assets.linkedin_icon} alt="" />
               </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home </li>
                    <li> About us</li>
                    <li>Delivery </li>
                    <li>Privacy policy </li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1-223-456-0789</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>

         </div>
         
         <hr/>
         <p>copyright 2024 @ Tomato.com -All Right Reserved</p>
    </div>
  )
}

export default Footer