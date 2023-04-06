// import React from 'react'
import styles from '@/styles/navbarForMobile.module.css'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Router from 'next/router'

function NavbarForMobile() {

    let [show, changeShow] = useState(false);

    const handleCross = () => {
        const { pathname } = Router;
        if (pathname == '/NavbarForMobile') {
            // with router.push the page may be added to history
            // the browser on history back will  go back to this page and then forward again to the redirected page
            // you can prevent this behaviour using location.replace
            Router.push('/')
            //location.replace("/hello-nextjs")
        }
    }

    let handleDropDown = () => {
        let prev = !show;
        console.log(prev + " " + show);
        changeShow(prev);
    }


    const handleFdBazzar = () => {
        const { pathname } = Router;
        if (pathname == '/NavbarForMobile') {   
          Router.push('/SecondPage')
        }
      }
    
    
      const handleSaving = () => {
        const { pathname } = Router;
        if (pathname == '/NavbarForMobile') {
          Router.push('/ThirdPage')
        }
      }
    
    
      const handleTax = () => {
        const { pathname } = Router;
        if (pathname == '/NavbarForMobile') {
          Router.push('/FourthPage')
        }
      }
    



    return (
        <div className={styles.navbarForMobile}>
            <div className={styles.header}>
                <Image
                    src="./assets/Frame.svg"
                    alt="fixed App logo"
                    className={styles.vercelLogo}
                    width={108.75}
                    height={30}
                    //                 width: 108.75px;
                    // height: 30px;
                    priority
                />

                <Image
                    src="./assets/x.svg"
                    alt="back to home"
                    className={styles.x}
                    width={108.75}
                    height={30}
                    //                 width: 108.75px;
                    // height: 30px;
                    priority
                    onClick={handleCross}
                />

            </div>

            <div className={styles.other}>

                <div className={styles.subpart}>

                    <div className={styles.selectOption}>
                        <div className={styles.invest}>Invest</div>
                        <Image
                            src="./assets/dropdown.svg"
                            alt="back to home"
                            className={styles.vercelLogo}
                            width={108.75}
                            height={30}
                            //                 width: 108.75px;
                            // height: 30px;
                            priority

                            onClick={handleDropDown}
                        />
                    </div>



                    {(() => {
                        if (show) {
                            return (
                                <div className={styles.options}>
                                    <div className={styles.option} onClick={handleFdBazzar}>FD Bazaar</div>
                                    <div className={styles.option} onClick={handleSaving}>Savings ++</div>
                                    <div className={styles.option} onClick={handleTax}>Tax Saver</div>
                                </div>
                            )
                        } else {
                            return (
                                <div></div>
                            )
                        }
                    })()}

                    <hr className={styles.hr} />

                    <div className={styles.blog}>
                        <div className={styles.text}>Blogs</div>
                    </div>
                    <hr className={styles.hr} />
                    <div className={styles.about}>
                        <div className={styles.text}>About</div>
                    </div>
                    <hr className={styles.hr} />
                </div>
            </div>
        </div>
    )
}

export default NavbarForMobile