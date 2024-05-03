import Footer from '../components/footer';
import Navbar from '../components/Navbar.jsx';
import styles from './Homepage.module.css'
function HomeOrgPage() {
    return(
        <div className={styles.containment_OrgHome}>
        <Navbar></Navbar>
        <div className='grid grid-cols-5 grid-rows-12'>
            <div className='lg:col-start-2 lg:col-span-3 lg:row-span-12'>
                <div className={styles.Boofehs_slide_card}>
                    Boofeh
                </div>
            </div>
        </div>
            <div className={styles.footer}>
                <Footer></Footer>
            </div>
        </div>
    );
};
export default HomeOrgPage;