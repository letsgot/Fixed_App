import React, { useState } from 'react'
import styles from '@/styles/eleventhPage.module.css'
import Image from 'next/image'

function EleventhPage() {
    return (
        <div className={styles.frame99}>
            <div className={styles.frame99Content}>
                <div className={styles.content1}>
                    <Image
                        src="./assets/fixed.svg"
                        alt="Vercel Logo"
                        className={styles.vercelLogo}
                        width={108.75}
                        height={30}
                        //                 width: 108.75px;
                        // height: 30px;
                        priority
                    />

                    <div className={styles.content1desc}>
                        Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </div>
                </div>
                <div className={styles.content2}>
                    <div className={styles.content2head}>Want to talk?</div>
                    <div className={styles.content2desc}>Call us and we will solve all your doubts and help you grow your business</div>
                    <div className={styles.content2footer}>
                        <div className={styles.callImage}>
                        <Image
                            src="./assets/callImage.svg"
                            alt="Vercel Logo"
                            className={styles.callImage}
                            width={100.75}
                            height={30}
                            //                 width: 108.75px;
                            // height: 30px;
                            priority
                        />
                    </div>Call +91 9876543210</div>
                </div>
                <div className={styles.content3}>
                    <div className={styles.head}>Company</div>
                    <div className={styles.desc}>About us</div>
                    <div className={styles.desc}>Carrer</div>
                    <div className={styles.desc}>Features</div>
                    <div className={styles.desc}>Mission</div>
                    <div className={styles.desc}>Need & Support</div>
                </div>
                <div className={styles.content4}>
                    <div className={styles.head}>Invests</div>
                    <div className={styles.desc}>FD Bazaar</div>
                    <div className={styles.desc}>Savings ++</div>
                    <div className={styles.desc}>Tax Saver</div>
                    <div className={styles.desc}>Regular Income</div>
                </div>
            </div>
            <div className={styles.line}>

            </div>
            <div className={styles.frame99footer}>
                <div className={styles.footerDesc}>
                    © 2023 Fixerra Pvt Ltd
                </div>
                <div className={styles.logos}>
                    <Image
                        src="./assets/yt.svg"
                        alt="Vercel Logo"
                        className={styles.logoImage}
                        width={108.75}
                        height={30}
                        //                 width: 108.75px;
                        // height: 30px;
                        priority
                    />

                    <Image
                        src="./assets/fb.svg"
                        alt="Vercel Logo"
                        className={styles.logoImage}
                        width={108.75}
                        height={30}
                        //                 width: 108.75px;
                        // height: 30px;
                        priority
                    />


                    <Image
                        src="./assets/lin.svg"
                        alt="Vercel Logo"
                        className={styles.logoImage}
                        width={108.75}
                        height={30}
                        //                 width: 108.75px;
                        // height: 30px;
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default EleventhPage