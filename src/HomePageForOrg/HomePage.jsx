import Footer from '../components/footer';
import Navbar from '../components/Navbar.jsx';
import styles from './Homepage.module.css'
function HomeOrgPage() {
    return(
        <div className={styles.containment_OrgHome}>
            <div className={styles.itemscenter}>    
                <Navbar></Navbar>
                <div className='grid grid-cols-5 grid-rows-12'>
                    <div className='col-start-1 col-span-2 row-start-1'>
                        <div className='bg-white'>
                            Boofeh
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};
export default HomeOrgPage;