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
                <div className="lg:col-start-2 lg:col-span-2 lg:row-start-3 md:col-start-2 md:col-span-3 md:text-center md:row-start-4 md:mt-8 md:items-center  col-start-2 col-span-3 row-start-3 mt-14 items-center text-center">
                    <div class="max-w-sm space-y-3">
                        <input type="text" maxlength="1" class="text-center py-2 lg:w-10 md:w-10 w-4 inline border-template-custom-blue rounded-lg text-sm focus:border-template-custom-orange focus:ring-template-custom-orange disabled:opacity-150 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                        <input type="text" maxlength="1" class="lg:mr-2 md:mr-2  mr-0 text-center py-2 lg:w-10 md:w-10 w-3 inline border-template-custom-blue rounded-lg text-sm focus:border-template-custom-orange focus:ring-template-custom-orange disabled:opacity-150 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                        <input type="text" maxlength="1" class="lg:mr-2 md:mr-2  mr-0 text-center py-2 lg:w-10 md:w-10 w-3 inline border-template-custom-blue rounded-lg text-sm focus:border-template-custom-orange focus:ring-template-custom-orange disabled:opacity-150 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                        <input type="text" maxlength="1" class="lg:mr-2 md:mr-2  mr-0 text-center py-2 lg:w-10 md:w-10 w-3 inline border-template-custom-blue rounded-lg text-sm focus:border-template-custom-orange focus:ring-template-custom-orange disabled:opacity-150 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                        <input type="text" maxlength="1" class="lg:mr-2 md:mr-2  mr-0 text-center py-2 lg:w-10 md:w-10 w-3 inline border-template-custom-blue rounded-lg text-sm focus:border-template-custom-orange focus:ring-template-custom-orange disabled:opacity-150 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"/>
                    </div>
                    <div className="lg:col-start-2 lg:col-span-2 lg:row-start-3 md:col-start-2 md:col-span-3 md:text-center md:row-start-4 md:mt-8 md:items-center  col-start-2 col-span-3 row-start-3 mt-14 items-center text-center">
                        <button className={styles.button_sign}>ثبت کد</button>
                    </div>
                </div>
            </div>
        </div>
     )
}
export default EmailVerify;