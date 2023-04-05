import React from 'react'
import styles from '@/styles/fifthPage.module.css'
import Image from 'next/image'


import data from './Data/allData.json'


function FifthPage() {
    let objects = data[4][0];
    return (
        <div className={styles.fifthPage}>
            <div className={styles.frame288}>
                <div className={styles.frame285}>
                       <div className={styles.head}>{objects.pageHead}</div>
                        <div className={styles.desc}> {objects.pagedesc}</div>
                </div>
                <div className={styles.frame280}>
                    <div className={styles.frame277}>
                        <div className={styles.head}><span>
                        <Image
                            src={objects.block1Img}
                            alt="Vercel Logo"
                            className={styles.frame240Image}
                            width={108.75}
                            height={30}
                            //                 width: 108.75px;
                            // height: 30px;
                            priority
                        />
                            </span>{objects.block1Head}</div>
                        <div className={styles.desc}>{objects.block1desc}</div>
                    </div>
                    <div className={styles.frame278}>
                        <div className={styles.head}><span>
                        <Image
                            src= {objects.block2Img}
                            alt="Vercel Logo"
                            className={styles.frame240Image}
                            width={108.75}
                            height={30}
                            //                 width: 108.75px;
                            // height: 30px;
                            priority
                        />
                            </span> {objects.block2Head}</div>
                        <div className={styles.desc}> {objects.block2desc}</div>
                    </div>
                    <div className={styles.frame279}>
                        <div className={styles.head}><span>
                        <Image
                            src= {objects.block3Img}
                            alt="Vercel Logo"
                            className={styles.frame240Image}
                            width={108.75}
                            height={30}
                            //                 width: 108.75px;
                            // height: 30px;
                            priority
                        />
                            </span> {objects.block3Head} </div>
                        <div className={styles.desc}> {objects.block3desc}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthPage