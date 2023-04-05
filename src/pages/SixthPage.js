import React from 'react'
import styles from '@/styles/sixthPage.module.css'
import Image from 'next/image'

import data from './Data/allData.json'
function SixthPage() {
    let arr = data[5];
    // console.log(arr[0].head);
    let numIn = 1;

    let str = "logo" + 1;

    return (
        <div className={styles.sixthPage}>
            <div className={styles.frame287}>
                <div className={styles.frame286}>
                    <div className={styles.head}>
                        Keep Learning. Keep Growing.
                    </div>
                    <div className={styles.desc}>
                        Insights and Strategies for Mastering Your Finances: Stay Up-to-Date with the Latest Trends, Tips, and Techniques to Take Control of Your Money
                    </div>
                </div>

                {/* className={`${styles.projects-pd-text} ${styles.projects-pd-subdetail}`} */}
                {/* Style[`logo${numIn}`] */}
                {/* className={[styles.projects_pd_text, styles.projects_pd_subdetail].join(" ")} */}
                <div className={styles.frame244}>
                    {arr.map((object) => {
                        return <div className={[styles.frame240, styles[`logo${numIn++}`]].join(" ")}>
                            {/* {numIn=numIn+1} */}
                        <Image
                            src={object.image}
                            alt="Vercel Logo"
                            className={styles.frame240Image}
                            width={108.75}
                            height={30}
                            //                 width: 108.75px;
                            // height: 30px;
                            priority
                        />
                        <div className={styles.head}>{object.head}</div>
                        <div className={styles.desc}>{object.content}</div>
                        <div className={styles.footer}>
                            <div className={styles.date}>{object.date}</div>
                            <div className={styles.desc}>Read More</div>
                        </div>
                    </div>
                    })}
                </div>
                <div className={styles.frame207}>
                    <div>More Insights</div>
                </div>
            </div>

        </div>
    )
}

export default SixthPage