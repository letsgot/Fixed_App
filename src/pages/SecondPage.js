import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'


import data from './Data/allData.json'


function SecondPage() {

    let objects = data[1][0];

    console.log(objects);

    return (
        <div className={styles.secondPage}>
            <div className={styles.frame289}>

            </div>
            <div className={styles.frame289Desc}>
                <div className={styles.head}>{objects.head}</div>
                <div className={styles.container}  priority >
                {objects.paragraph}
                </div>
                <div className={styles.buttonExplore}>
                    {/* lorem Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. */}
                    <div>{objects.button}</div>
                </div>
            </div>
        </div>
    )
}

export default SecondPage