import React from 'react'
import Image from 'next/image';
// import { Inter } from 'next/font/google';
import styles from '@/styles/tenthPage.module.css';
import data from './Data/allData.json'
function TenthPage() {
    let objects = data[9][0];
    return (
        <div className={styles.tenthPage}>
            <div className={styles.frame294}>
                <div className={styles.head}>{objects.head}</div>
                <div className={styles.desc}>{objects.content}</div>
                <div className={styles.frame308Button}>
                    <button>{objects.button}</button>
                </div>
            </div>
        </div>
    )
}

export default TenthPage