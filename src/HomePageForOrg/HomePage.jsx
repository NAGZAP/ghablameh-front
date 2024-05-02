import Footer from '../components/footer';
import Navbar from '../components/Navbar.jsx';
import styles from './Homepage.module.css';
function HomeOrgPage() {
    return(
        <div className={styles.containment_OrgHome}>
            <div className={styles.itemscenter}>   
                <div className={styles.app}>
                    <div className='grid grid-rows-12 grid-cols-5'>
                        <div className='row-start-1 col-start-1 col-span-6'>
                        <Navbar></Navbar>
                        </div>
                        <div className='lg:col-start-1 lg:col-span-2 lg:row-start-2 lg:row-span-7 md:col-start-1 md:col-span-5 md:row-start-2 md:row-span-4 sm:col-start-1 sm:col-span-5 sm:row-start-2 sm:row-span-4 s'>
                            <div className='bg-white h-full'>
                                Boofeh
                            </div>
                        </div>
                    </div>
                <Footer></Footer>
            </div>
        </div>
        </div>
    );
};
export default HomeOrgPage;