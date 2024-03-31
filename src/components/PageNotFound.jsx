import '../styles/PageNotFound.css';

function PageNotFound() {
    return (
        <div className="page-not-found">

            <div className='size-me'>
                <section className="error-container flex justify-center items-center ">
                    <span className="four flex"><span className="screen-reader-text">4</span></span>
                    <span className="zero flex"><span className="screen-reader-text">0</span></span>
                    <span className="four flex"><span className="screen-reader-text">4</span></span>
                </section>
            </div>

            <div className='flex justify-center text-me'>
                <h3 className="text-white">!صفحه مورد نظر یافت نشد</h3>
            </div>

            <div className='flex justify-center'>
                <a href="#" className="text-white home-link">بازگشت به صفحه اصلی</a>
            </div>

        </div>
    );
}

export default PageNotFound;
