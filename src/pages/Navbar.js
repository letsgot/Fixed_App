// import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Router from 'next/router'

import data from './Data/allData.json'


// import styles from '@/styles/Home.module.css'
function Navbar() {
  let objects = data[0][0];
  // console.log(objects);
  const [loaded, setLoaded] = useState(false)
  // useEffect(() => {
  //   const { pathname } = Router
  //   // conditional redirect
  //   if (pathname == '/') {
  //     // with router.push the page may be added to history
  //     // the browser on history back will  go back to this page and then forward again to the redirected page
  //     // you can prevent this behaviour using location.replace
  //     Router.push('/TenthPage')
  //     //location.replace("/hello-nextjs")
  //   } else {
  //     setLoaded(true)
  //   }
  // }, []);

  const handleNavbar = ()=>{
     const { pathname } = Router;
     if (pathname == '/') {
      // with router.push the page may be added to history
      // the browser on history back will  go back to this page and then forward again to the redirected page
      // you can prevent this behaviour using location.replace
      Router.push('/NavbarForMobile')
      //location.replace("/hello-nextjs")
    }
  }


  return (
    <div className={styles.nav}>
      <div className={styles.navbar}>
        <Image
          src={objects.frameImg}
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={108.75}
          height={30}
          //                 width: 108.75px;
          // height: 30px;
          priority
        />

        <div className={styles.frame238}>
          <div>{objects.invest}<select></select></div>
          <div>{objects.blogs}</div>
          <div>{objects.about}</div>
        </div>


        <div className={styles.frame239}>
          <button>{objects.bestinvestmentbutton}</button>
        </div>

        <div className={styles.optionsBar}>
          <Image
            src={objects.optionImage}
            alt="Options Bar"
            className={styles.vercelLogo}
            width={108.75}
            height={30}
            //                 width: 108.75px;
            // height: 30px;
            onClick={handleNavbar}

            priority
          />
        </div>
      </div>

      <div className={styles.frame263}>
        <Image
          src={objects.micImage}
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={108.75}
          height={30}
          //                 width: 108.75px;
          // height: 30px;
          priority
        />

        <div className={styles.SbiFrame263}>{objects.textOnAlert}</div>
        <div className={styles.actionOnFrame263}>{objects.btnOnAlert}</div>
      </div>

    </div>
  )
}

export default Navbar