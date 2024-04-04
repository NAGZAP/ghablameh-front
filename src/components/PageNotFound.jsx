import styles from '../styles/PageNotFound.module.css';
import classnames from 'classnames';
function PageNotFound() {
    return (
        <div className={`${styles['page-not-found']}`}>

            <div className={`${styles['size-me']}`}>
                <section className={`${styles['error-container']} flex justify-center items-center`}>
                
                    <span className={`${styles['four']} flex`}><span className={`${styles['screen-reader-text']}`}>4</span></span>
                    <span className={`${styles['zero']} flex`}><span className={`${styles['screen-reader-text']}`}>0</span></span>
                    <span className={`${styles['four']} flex`}><span className={`${styles['screen-reader-text']}`}>4</span></span>
                </section>
            </div>

            <div className={`${styles['text-me']} flex justify-center`}>
                <h3 className={`text-white`}>!صفحه مورد نظر یافت نشد</h3>
            </div>

            <div className={`flex justify-center`}>
                <a href="#" className={`${styles['home-link']} text-white`}>بازگشت به صفحه اصلی</a>
            </div>

        </div>
    );
}

export default PageNotFound;
