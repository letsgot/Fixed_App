import React from 'react'
import styles from '@/styles/eighthPage.module.css'
import Image from 'next/image';
import data from './Data/allData.json'
function EighthPage() {
    let objects = data[7][0];
    return (
        <div className={styles.eighthPage}>
            <div className={styles.frame294}>
                <div className={styles.frame290}>
                    <div className={styles.head}>{objects.head}</div>
                    <div className={styles.desc}>{objects.content}</div>
                </div>
                <div className={styles.frame293}>
                    <Image
                        alt='Mountains'
                        className={styles.vercelLogo}
                        src={objects.img1}
                        width={108}
                        height={30}
                    />

                    <Image
                        alt='Mountains'
                        className={styles.vercelLogo}
                        src={objects.img2}
                        width={108}
                        height={30}
                    />


                    <Image
                        alt='Mountains'
                        className={styles.vercelLogo}
                        src={objects.img3}
                        width={30}
                        height={30}
                    />

                </div>
            </div>
        </div>
    )
}

export default EighthPage