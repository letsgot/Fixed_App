import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.navbar}>
        <Image
          src="./assets/Frame.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={108.75}
          height={30}
          //                 width: 108.75px;
          // height: 30px;
          priority
        />

        <div className={styles.frame238}>
          <div>Invest<select></select></div>
          <div>Blogs</div>
          <div>About</div>
        </div>


        <div className={styles.frame239}>
          <button>Best Investments Options</button>
        </div>
      </div>

      <div className={styles.frame263}>
        <Image
            src="./assets/Vector.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={108.75}
            height={30}
            //                 width: 108.75px;
            // height: 30px;
            priority
          />

          <div className={styles.SbiFrame263}>SBI FD rate climbed up to 8.5%</div>
          <div className={styles.actionOnFrame263}>Take Action</div>
      </div>

    </div>
  )
}

export default Navbar