import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
function SecondPage() {
    return (
        <div className={styles.secondPage}>
            <div className={styles.frame289}>

            </div>
            <div className={styles.frame289Desc}>
                <div className={styles.head}>FD Bazaar</div>
                <div className={styles.container}  priority >
                    Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                </div>
                <div className={styles.buttonExplore}>
                    {/* lorem Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. */}
                    <div>Explore FDs</div>
                </div>
            </div>
        </div>
    )
}

export default SecondPage