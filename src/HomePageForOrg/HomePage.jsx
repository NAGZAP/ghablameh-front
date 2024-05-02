import Footer from '../components/footer';
import Navbar from '../components/Navbar.jsx';
import styles from './Homepage.module.css';
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function HomeOrgPage() {
    return(
        <div className={styles.containment_OrgHome}>
            <div className={styles.itemscenter}>   
                <div className={styles.app}>
                    <div className='grid grid-rows-12 grid-cols-5'>
                        <div className='row-start-1 col-start-1 col-span-6'>
                        <Navbar></Navbar>
                        </div>
                        <div className='lg:col-start-1 lg:col-span-2 lg:row-start-2 lg:row-span-7 md:col-start-1 md:col-span-5 md:row-start-2 md:row-span-4 sm:col-start-1 sm:col-span-5 sm:row-start-2 sm:row-span-4 col-start-1 col-span-5 row-start-2 row-span-4'>
                            <div className='bg-white bg-opacity-60 h-full rounded-lg m-5 grid grid-rows-5 grid-cols-5'>
                                <div className='col-start-2 col-span-3 row-start-1'>
                                    <p className='max font-semibold text-template-custom-blue text-4xl dark:text-template-custom-blue text-center mt-5'>بوفه ها</p>
                                </div>
                                <div className='col-start-2 col-span-3 row-start-2 row-span-3'>
                                    <p className=""></p>
                                </div>
                                <div className='col-start-2 col-span-3 row-start-5'>
                                    <div className='font-normal text-template-custom-blue textxl'>
                                        <Link to="/OrgPage" className={styles.link_to_Panelorg}>
                                            <p>مدیریت بوفه ها</p>
                                        </Link>
                                    </div>
                                </div>
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