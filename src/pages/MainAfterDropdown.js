import React from 'react'
import styles from '@/styles/mainAfterDropdown.module.css'
import Image from 'next/image'
import data from './Data/allData.json'
function MainAfterDropdown() {
    let objects = data[0][0];
    return (
        <div>
            <div className={styles.frame263}>
                <Image
                    src={objects.micImage}
                    alt="Vercel Logo"
                    className={styles.vercelLogo}
                    width={108.75}
                    height={30}
                    //                 width: 108.75px;
                    // height: 30px;
                    priority
                />

                <div className={styles.SbiFrame263}>{objects.textOnAlert}</div>
                <div className={styles.actionOnFrame263}>{objects.btnOnAlert}</div>
            </div>


            <div className={styles.main}>
                <Image
                    src={objects.fbutton}
                    alt="Vercel Logo"
                    className={styles.fCoin2}
                    width={108.75}
                    height={30}
                    priority
                />

                <Image
                    src={objects.pbutton}
                    alt="Vercel Logo"
                    className={styles.pCoin1}
                    width={108.75}
                    height={30}
                    priority
                />

                <Image
                    src={objects.redbutton}
                    alt="Vercel Logo"
                    className={styles.RGCoin}
                    width={108.75}
                    height={30}
                    priority
                />


                <Image
                    src="./assets/Arrow Coin 1.svg"
                    alt="Vercel Logo"
                    className={styles.ACoin1}
                    width={108.75}
                    height={30}
                    priority
                />

                <div className={styles.frame308}>
                    <div className={styles.frame308Head}>
                        {objects.pageHeading}
                    </div>
                    <div className={styles.frame308Desc}>
                        {objects.pageData}
                    </div>
                    <div className={styles.frame308Button}>
                        <button>{objects.buttonText}</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MainAfterDropdown