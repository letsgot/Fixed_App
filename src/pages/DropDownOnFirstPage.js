import React from 'react'
import styles from '@/styles/dropDownOnFirstPage.module.css'
// import Image from 'next/image'

function DropDownOnFirstPage() {
  return (
    <div className={styles.invest}>
        <div className={styles.subPart}>FD Bazaar</div>
        <div className={styles.subPart}>Savings ++</div>
        <div className={styles.subPart}>Tax Saver</div>
    </div>
  )
}

export default DropDownOnFirstPage