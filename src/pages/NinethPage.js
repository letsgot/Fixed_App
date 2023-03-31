import React from 'react'
import styles from '@/styles/NinethPage.module.css'
import Image from 'next/image'
function NinethPage() {
    return (
        <div className={styles.NinethPage}>
            <div className={styles.Nframe294}>
                <div className={styles.Nframe290}>
                    <div className={styles.head}>Follow us</div>
                    <div className={styles.desc}>Discover the passion, expertise, and values that drive our team and fuel their commitment to excellence.</div>
                </div>
                <div className={styles.Nframe293}>
                    <div className={styles.spaceForImage}>
                        <Image
                            alt='Mountains'
                            className={styles.vercelLogo}
                            src='./assets/_YouTube.svg'
                            width={107}
                            height={80}
                        />

                        <div className={styles.desc}>@fixedInvestments</div>


                    </div>


                    <div className={styles.spaceForImage}>
                        <Image
                            alt='Mountains'
                            className={styles.vercelLogo}
                            src="./assets/_Telegram.svg"
                            width={107}
                            height={80}
                        />


                        <div className={styles.desc}>@fixedInvestments</div>


                    </div>


                    <div className={styles.spaceForImage}>
                        <Image
                            alt='Mountains'
                            className={styles.vercelLogo}
                            src='./assets/_Linkedin.svg'
                            width={107}
                            height={80}
                        />

                        <div className={styles.desc}>@fixedInvestments</div>


                    </div>






                </div>
            </div>
        </div>
    )
}

export default NinethPage