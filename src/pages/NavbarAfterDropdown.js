import React from 'react'
import styles from '@/styles/navbarAfterDropdown.module.css'
import Image from 'next/image'
import data from './Data/allData.json'
function NavbarAfterDropdown(props) {
    let objects = data[0][0];

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
          <div onClick={()=>handleWorkDone(true)}>{objects.invest}<select></select></div>
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

            priority
          />
        </div>
      </div>

    </div>
  )
}

export default NavbarAfterDropdown