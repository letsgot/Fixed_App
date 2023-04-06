import React from 'react'
import styles from '@/styles/NinethPage.module.css'
import Image from 'next/image'
import data from './Data/allData.json'
function NinethPage() {
    let objects = data[8][0];
    return (
        <div className={styles.NinethPage}>
            <div className={styles.Nframe294}>
                <div className={styles.Nframe290}>
                    <div className={styles.head}>{objects.head}</div>
                    <div className={styles.desc}>{objects.content}</div>
                </div>
                <div className={styles.Nframe293}>
                    <div className={styles.spaceForImage}>
                        <Image
                            alt='Mountains'
                            className={styles.vercelLogo}
                            src={objects.img1}
                            width={107}
                            height={80}
                        />

                        <div className={styles.desc}>{objects.desc}</div>


                    </div>


                    <div className={styles.spaceForImage}>
                        <Image
                            alt='Mountains'
                            className={styles.vercelLogo}
                            src={objects.img2}
                            width={107}
                            height={80}
                        />


                        <div className={styles.desc}>{objects.desc}</div>


                    </div>


                    <div className={styles.spaceForImage}>
                        <Image
                            alt='Mountains'
                            className={styles.vercelLogo}
                            src={objects.img3}
                            width={107}
                            height={80}
                        />

                        <div className={styles.desc}>{objects.desc}</div>


                    </div>






                </div>
            </div>
        </div>
    )
}

export default NinethPage