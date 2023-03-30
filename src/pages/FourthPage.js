import React from 'react'
import styles from '@/styles/fourthPage.module.css'
import Image from 'next/image'

function FourthPage() {
    return (
        <div className={styles.fourthPage}>
            <div className={styles.frame500}>

            </div>
            <div className={styles.frame500Desc}>
                <div className={styles.head}>Tax Saver</div>
                <div className={styles.container}>
                Choose across investments that you can easily withdraw and liquidate in times of need
                </div>
                <div className={styles.buttonExplore}>
                    <div>Save your tax</div>
                </div>
            </div>
        </div>
    )
}

export default FourthPage