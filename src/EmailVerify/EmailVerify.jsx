import styles from "./EmailVerify.module.css"

function EmailVerify(){
     return(
        <div className={styles.container +' '+ "grid grid-cols-7 grid-rows-7"}>
            <div className="col-start-2 col-span-5 row-start-2 row-span-5 bg-white h-full bg-opacity-60 rounded-lg m-5 grid grid-rows-5 grid-cols-5">
                <div className='lg:items-center lg:col-start-4 lg:col-span-3 lg:row-start-2 lg:row-span-3 col-start-2 col-span-3'>
                    <img className ="" src='../src/assets/thankyoudribble.gif'></img>
                </div>
                <div className="lg:col-start-1 lg:col-span-3 lg:row-start-2 text-center mt-24 md:col-start-2 md:col-span-3 md:row-start-3 col-start-1 col-span-5 row-start-2 m-5 text-lg font-bold">
                    <p classNmae="">برای تایید ایمیل خود کد ۵ رقمی ارسالی را وارد کنید!</p>
                </div>
            </div>
        </div>
     )
}
export default EmailVerify;