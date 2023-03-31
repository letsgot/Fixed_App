import React from 'react'
import Image from 'next/image';
// import { Inter } from 'next/font/google';
import styles from '@/styles/tenthPage.module.css';

function TenthPage() {
    return (
        <div className={styles.tenthPage}>
            <div className={styles.frame294}>
                <div className={styles.head}>Start Investing</div>
                <div className={styles.desc}>Discover the passion, expertise, and values that drive our team and fuel their commitment to excellence.</div>
                <div className={styles.frame308Button}>
                    <button>Invest Now</button>
                </div>
            </div>
        </div>
    )
}

export default TenthPage