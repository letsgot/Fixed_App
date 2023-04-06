import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Router from 'next/router'

import data from './Data/allData.json'

function Navbar(props) {
  let objects = data[0][0];
  const [loaded, setLoaded] = useState(false)

  console.log("props         "+props.handleCallback);

  const handleNavbar = ()=>{
     const { pathname } = Router;
     if (pathname == '/') {
      Router.push('/NavbarForMobile')
    }
  }


  let handleWorkDone = (task)=>{
    console.log(task);
    {props.handleCallback(task)};
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
          priority
        />

        <div className={styles.frame238}>
          <div onClick={()=>handleWorkDone(false)}>{objects.invest}<select></select></div>
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