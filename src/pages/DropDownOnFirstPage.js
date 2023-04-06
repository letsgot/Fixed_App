// import React from 'react'
import styles from '@/styles/dropDownOnFirstPage.module.css'
// import Image from 'next/image'
// import styles from '@/styles/navbarForMobile.module.css'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Router from 'next/router'

function DropDownOnFirstPage() {

  const handleFdBazzar = () => {
    const { pathname } = Router;
    if (pathname == '/') {   
      Router.push('/SecondPage')
    }
  }


  const handleSaving = () => {
    const { pathname } = Router;
    if (pathname == '/') {
      Router.push('/ThirdPage')
    }
  }


  const handleTax = () => {
    const { pathname } = Router;
    if (pathname == '/') {
      Router.push('/FourthPage')
    }
  }



  return (
    <div className={styles.invest}>
      <div className={styles.subPart} onClick={handleFdBazzar}>FD Bazaar</div>
      <div className={styles.subPart} onClick={handleSaving}>Savings ++</div>
      <div className={styles.subPart} onClick={handleTax}>Tax Saver</div>
    </div>
  )
}

export default DropDownOnFirstPage