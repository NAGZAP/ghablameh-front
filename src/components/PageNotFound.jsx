import '../styles/PageNotFound.css';

function PageNotFound() {
    return (
        <div>

            <div className='size-me'>
                <section className="error-container">
                    <span className="four"><span className="screen-reader-text">4</span></span>
                    <span className="zero"><span className="screen-reader-text">0</span></span>
                    <span className="four"><span className="screen-reader-text">4</span></span>
                </section>
            </div>

            <div className='flex justify-center'>
                <a href="#" className="text-white home-link">Back to Homepage</a>
            </div>

        </div>
    );
}

export default PageNotFound;
