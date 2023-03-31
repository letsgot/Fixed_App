import React from 'react'
import styles from '@/styles/eighthPage.module.css'
import Image from 'next/image'
function EighthPage() {
    return (
        <div className={styles.eighthPage}>
            <div className={styles.frame294}>
                <div className={styles.frame290}>
                    <div className={styles.head}>In the press</div>
                    <div className={styles.desc}>Discover the passion, expertise, and values that drive our team and fuel their commitment to excellence.</div>
                </div>
                <div className={styles.frame293}>
                    <Image
                        alt='Mountains'
                        className={styles.vercelLogo}
                        src='./assets/image 16.svg'
                        width={108}
                        height={30}
                    />

                    <Image
                        alt='Mountains'
                        className={styles.vercelLogo}
                        src="./assets/image 14.svg"
                        width={108}
                        height={30}
                    />


                    <Image
                        alt='Mountains'
                        className={styles.vercelLogo}
                        src='./assets/image 15.svg'
                        width={30}
                        height={30}
                    />

                </div>
            </div>
        </div>
    )
}

export default EighthPage