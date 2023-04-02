import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from './Navbar';
import Main from './Main';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';
import FifthPage from './FifthPage';
import SixthPage from './SixthPage';
import SeventhPage from './SeventhPage'
import EighthPage from './EighthPage';
import NinethPage from './NinethPage';
import TenthPage from './TenthPage';
import EleventhPage from './EleventhPage';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fixed App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <Main></Main>
      <SecondPage></SecondPage>
      <ThirdPage></ThirdPage>
      <FourthPage></FourthPage>
      <FifthPage></FifthPage>
      <SixthPage></SixthPage>
      <SeventhPage></SeventhPage>
      <EighthPage></EighthPage>
      <NinethPage></NinethPage>
      <TenthPage></TenthPage>
      <EleventhPage></EleventhPage>
      {/* <SeventhPage></SeventhPage> */}
    </>
  )
}
