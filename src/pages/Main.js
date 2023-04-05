import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'


import data from './Data/allData.json'


function Main() {

  let objects = data[0][0];

  return (
    <div className={styles.main}>
      <Image
        src={objects.fbutton}
        alt="Vercel Logo"
        className={styles.fCoin2}
        width={108.75}
        height={30}
        //                 width: 108.75px;
        // height: 30px;
        priority
      />

      <Image
        src={objects.pbutton}
        alt="Vercel Logo"
        className={styles.pCoin1}
        width={108.75}
        height={30}
        //                 width: 108.75px;
        // height: 30px;
        priority
      />

      <Image
        src={objects.redbutton}
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
          {objects.pageHeading}
        </div>
        <div className={styles.frame308Desc}>
          {objects.pageData}
        </div>
        <div className={styles.frame308Button}>
          <button>{objects.buttonText}</button>
        </div>
      </div>


    </div>
  )
}

export default Main