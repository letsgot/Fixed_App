import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'

function Main() {
  return (
    <div className={styles.main}>
        <Image
          src="./assets/F Coin 2.svg"
          alt="Vercel Logo"
          className={styles.fCoin2}
          width={108.75}
          height={30}
          //                 width: 108.75px;
          // height: 30px;
          priority
        />

<Image
          src="./assets/Percent Coin 1.svg"
          alt="Vercel Logo"
          className={styles.pCoin1}
          width={108.75}
          height={30}
          //                 width: 108.75px;
          // height: 30px;
          priority
        />

<Image
          src="./assets/Rupee Gold Coin.svg"
          alt="Vercel Logo"
          className={styles.RGCoin}
          width={108.75}
          height={30}
          //                 width: 108.75px;
          // height: 30px;
          priority
        />

        
<Image
          src="./assets/Arrow Coin 1.svg"
          alt="Vercel Logo"
          className={styles.ACoin1}
          width={108.75}
          height={30}
          //                 width: 108.75px;
          // height: 30px;
          priority
        />

    <div className={styles.frame308}>
        <div className={styles.frame308Head}>
        Stress-Free Investing
        </div>
        <div className={styles.frame308Desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        </div>
        <div  className={styles.frame308Button}>
        <button>Join the Waitlist</button>
        </div>
    </div>


    </div>
  )
}

export default Main