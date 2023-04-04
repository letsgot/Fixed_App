import React from 'react'
import Image from 'next/image';
// import { Inter } from 'next/font/google';
import styles from '@/styles/seventhPage.module.css';
import objects from './Data/teamdata'

function SeventhPage() {
  console.log(objects);
  return (
    <div className={styles.seventhPage}>
      <div className={styles.frame292}>
        <div className={styles.frame291}>
          <div className={styles.frame290}>
            <div className={styles.head}>Meet the team</div>
            <div className={styles.desc}>Discover the passion, expertise, and values that drive our team and fuel their commitment to excellence.</div>
          </div>
        </div>
        <div className={styles.frame261}>
          <div className={styles.frame262}>
            <div className={styles.frame259}>
              <Image
                alt='Mountains'
                className={styles.photo}
                src='/assets/mtt1.png'
                width={108}
                height={30}
              />

              <div className={styles.profileDesc}>
                <div className={styles.name}>
                  <div className={styles.head}>Akshar Shah</div>
                  <div className={styles.post}>Founder and CEO</div>
                </div>
                <div className={styles.linkedImage}>
                  <Image
                    alt='Mountains'
                    className={styles.photo}
                    src='./assets/linkedImage.svg'
                    width={108}
                    height={30}
                  />
                </div>
              </div>
            </div>

            <div className={styles.desc}>
              Our vision is to make safe investments with better returns easily accessibly to all indians
            </div>

          </div>
          <div className={styles.frame260}>

            {objects.map((object, i) => {
              if (i == 0) {
                return
              }
              else {
                return <div className={styles.frame259}>
                  <Image
                    alt='Mountains'
                    className={styles.photo}
                    src={object.image}
                    width={108}
                    height={30}
                  />

                  <div className={styles.profileDesc}>
                    <div className={styles.name}>
                      <div className={styles.head}>{object.name}</div>
                      <div className={styles.post}>{object.Role}</div>
                    </div>
                    <div className={styles.linkedImage}>
                      <Image
                        alt='Mountains'
                        className={styles.photo}
                        src='./assets/linkedImage.svg'
                        width={108}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeventhPage