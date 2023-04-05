import React from 'react'
import styles from '@/styles/fourthPage.module.css'
import Image from 'next/image'

import data from './Data/allData.json'


function FourthPage() {

    let objects = data[3][0];

    return (
        <div className={styles.fourthPage}>
            <div className={styles.frame500}>

            </div>
            <div className={styles.frame500Desc}>
                <div className={styles.head}>{objects.head}</div>
                <div className={styles.container}>
                {objects.paragraph}
                </div>
                <div className={styles.buttonExplore}>
                    <div>{objects.button}</div>
                </div>
            </div>
        </div>
    )
}

export default FourthPage