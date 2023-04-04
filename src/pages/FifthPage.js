import React from 'react'
import styles from '@/styles/fifthPage.module.css'
import Image from 'next/image'

function FifthPage() {
    return (
        <div className={styles.fifthPage}>
            <div className={styles.frame288}>
                <div className={styles.frame285}>
                       <div className={styles.head}>Why Fixed?</div>
                        <div className={styles.desc}> Choose across investments that you can easily withdraw and liquidate in times of need</div>
                </div>
                <div className={styles.frame280}>
                    <div className={styles.frame277}>
                        <div className={styles.head}><span>
                        <Image
                            src="/assets/s1.svg"
                            alt="Vercel Logo"
                            className={styles.frame240Image}
                            width={108.75}
                            height={30}
                            //                 width: 108.75px;
                            // height: 30px;
                            priority
                        />
                            </span>Safe investments that beat inflation</div>
                        <div className={styles.desc}>Low risk, High return investments that are easy to understand </div>
                    </div>
                    <div className={styles.frame278}>
                        <div className={styles.head}><span>
                        <Image
                            src="/assets/s2.svg"
                            alt="Vercel Logo"
                            className={styles.frame240Image}
                            width={108.75}
                            height={30}
                            //                 width: 108.75px;
                            // height: 30px;
                            priority
                        />
                            </span>Safe investments that protect capital</div>
                        <div className={styles.desc}>Get access to stable and low risk investment options for goals where you cannot afford losses </div>
                    </div>
                    <div className={styles.frame279}>
                        <div className={styles.head}><span>
                        <Image
                            src="/assets/s3.svg"
                            alt="Vercel Logo"
                            className={styles.frame240Image}
                            width={108.75}
                            height={30}
                            //                 width: 108.75px;
                            // height: 30px;
                            priority
                        />
                            </span>Liquid investments to manage emergencies </div>
                        <div className={styles.desc}> Choose across investments that you can easily withdraw and liquidate in times of need</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthPage