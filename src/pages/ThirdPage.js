import React from 'react'
import styles from '@/styles/thirdPage.module.css'
import Image from 'next/image'


import data from './Data/allData.json'


function ThirdPage() {
  let objects = data[2][0];


  return (
    <div className={styles.thirdPage}>

      <div className={styles.frame273}>

      </div>

      <div className={styles.frame273Desc}>
        <div className={styles.head}>{objects.headPart1}<span>{objects.headPart2}</span></div>
        <div className={styles.container}>
          {objects.paragraph}
        </div>
        <div className={styles.saveNow}>
          <div>Save now</div>
        </div>
      </div>
    </div>

  )
}

export default ThirdPage