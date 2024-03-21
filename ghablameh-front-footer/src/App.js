
import './App.css';
import React from 'react';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTelegram} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="footer-section">
    <div className="container mx-auto">
        <div className="footer-cta pt-5 pb-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
            <FontAwesomeIcon
               icon={faMapMarkerAlt}
              className="custom-icon"
             style={{ color: '#ff5e14', fontSize: '24px' }}
               />
              <div className="cta-text ml-2">
              
                <h4>آدرس ما</h4>
                <span>تهران ، خیابان فرجام ، دانشگاه علم و صنعت ایران</span>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="custom-icon"
               style={{ color: '#ff5e14', fontSize: '24px' }}/>
              <div className="cta-text ml-2">
                <h4>تماس با ما</h4>
                <span>9876543210 0</span>
              </div>
            </div>
            <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelopeOpen}  className="custom-icon"
              style={{ color: '#ff5e14', fontSize: '24px' }}/>
              <div className="cta-text ml-2">
                <h4>ایمیل ما</h4>
                <span>mail@info.com</span>
              </div>
       

            </div>

          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mb-10">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" /></a>
                </div>
                <div className="footer-text lg:text-right ">
                  <p>این سایت یک سامانه رزو غذاست که میتوانید غذای خود را رزو کنید،مدیران شرکت ها میتوانند غذای کارمندان خود را رزو کنند</p>
                </div>
                <div className="footer-social-icon">
                  <span>ارتباط با ما</span>
                  <a href="#"><FontAwesomeIcon icon={faFacebookF} className="facebook-bg" /></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} className="twitter-bg" /></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} className="insta-bg" /></a>
                  <a href="#"><FontAwesomeIcon icon={faTelegram} className="tel-bg" /></a>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>لینک های مفید</h3>
                </div>
                <ul>
                  <li><a href="#">خانه</a></li>
                  <li><a href="#">درباره</a></li>
                  <li><a href="#">سرویس ها</a></li>
                  <li><a href="#">نمونه رزوها</a></li>
                  <li><a href="#">ارتباط</a></li>
                  <li><a href="#">درباره ما</a></li>
                  <li><a href="#">سرویس های ما</a></li>
                  <li><a href="#">تیم متخصص</a></li>
                  <li><a href="#">ارتباط با ما</a></li>
                  <li><a href="#">اخرین خبرها</a></li>
                </ul>
              </div>
            </div>
            <div className="mb-10">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>عضویت</h3>
                </div>
                <div className="footer-text lg:text-right mb-4">
                  <p>برای دنبال کردن ما و اطلاع از جدیدترین خبر ها ما را دنبال کنید ، لطفا فرم زیر را پر کنید</p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="آدرس ایمیل" className="border  border-gray-300 py-2 px-3 rounded-md" />
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-md ml-2"><FontAwesomeIcon icon={faTelegramPlane}  className='telegram'/></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="copyright-area">
      <div className="container">
        <div className="row">
        <div className=" lg:text-left ml-9 mb-2">
            
          </div>
          <div className="text-right">
          <div className="lg:block col-span-6 lg:col-span-6 text-right mb-4">
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Policy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;