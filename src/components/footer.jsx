import '../App.css'
import styles from  '../styles/footer.module.css';
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
   
    <div className={styles.app}>
    <footer className={styles.footersection}>
      <div className={`${styles.container} mx-auto`}>
        <div className={`${styles['footer-content']} pt-5 pb-5`}>
          <div className={styles['iner-footer']}>
            <div className="mb-10">
              <div className={styles['footer-widget']}>
                <div className={styles['footer-logo']}>
                  <a href="index.html">
                    <img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className={styles['footer-social-icon']}>
                  <span> شبکه های اجتماعی</span>
                  <a href="#"><FontAwesomeIcon icon={faFacebookF} className={styles['facebook-bg']} /></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} className={styles['twitter-bg']} /></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} className={styles['insta-bg']} /></a>
                  <a href="#"><FontAwesomeIcon icon={faTelegram} className={styles['tel-bg']} /></a>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <div className={styles['footer-widget']}>
                <div className={styles['footer-widget-heading']}>
                  <h3>لینک های مفید</h3>
                </div>
                <ul>
                  <li><a href="#">خانه</a></li>
                  <li><a href="#">درباره</a></li>
                  <li><a href="#">سرویس ها</a></li>
                  <li><a href="#">ارتباط</a></li>
                  <li><a href="#">سرویس های ما</a></li>
                  <li><a href="#">تیم متخصص</a></li>
                  <li><a href="#">ارتباط با ما</a></li>
                  <li><a href="#">اخرین خبرها</a></li>
                </ul>
              </div>
            </div>
            <div className="mb-10">
              <div className={styles['footer-widget']}>
                <div className={styles['footer-widget-heading']}>
                  <h3>ارتباط با ما</h3>
                </div>
                <div className={styles.footer}>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className={styles['custom-icon']}
                style={{ color: '#ff5e14', fontSize: '24px' }}
              />
              <div className={`${styles['cta-text']} ml-2`}>
                <h4>آدرس ما</h4>
                <span>تهران ، خیابان فرجام ، دانشگاه علم و صنعت ایران</span>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className={styles['custom-icon']}
                style={{ color: '#ff5e14', fontSize: '24px' }}
              />
              <div className={`${styles['cta-text']} ml-2`}>
                <h4>تماس با ما</h4>
                <span>9876543210 0</span>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelopeOpen}
                className={styles['custom-icon']}
                style={{ color: '#ff5e14', fontSize: '24px' }}
              />
              <div className={`${styles['cta-text']} ml-2`}>
                <h4>ایمیل ما</h4>
                <span>mail@info.com</span>
              </div>
            </div>
          </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className={styles['copyright-area']}>
      <div className={styles['container']}>
        <div className="row">
        <div className=" lg:text-left ml-9 mb-2">
          </div>
          <div className="text-right">
          <div className="lg:block col-span-6 lg:col-span-6 text-right mb-4">
            <div className={styles['footer-menu']}>
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
    </div>
  );
};

export default Footer;