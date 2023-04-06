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
import { useState } from 'react';
// import MeetTheTeam from '../new/meet-the-team-container'
import MainAfterDropdown from './MainAfterDropdown';
import DropDownOnFirstPage from './DropDownOnFirstPage';
import NavbarAfterDropdown from './NavbarAfterDropdown';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  let [dropdown,handleDropdown] = useState(true);
 
  
  let callback = (curr)=>{
    console.log(curr);
      let check = curr;
      handleDropdown(check);
  }

  console.log(callback);

  return (
    <>
      <Head>
        <title>Fixed App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Navbar key="1.1"></Navbar>
      <Main key="1.2" ></Main> */}
      {/* <NavbarAfterDropdown></NavbarAfterDropdown>
      <DropDownOnFirstPage></DropDownOnFirstPage>
      <MainAfterDropdown></MainAfterDropdown> */}

      {(dropdown) ?
        <>
          <Navbar key="1.1" handleCallback={callback}></Navbar>
          <Main key="1.2" ></Main>
        </>:<>
          <NavbarAfterDropdown handleCallback={callback}></NavbarAfterDropdown>
          <DropDownOnFirstPage></DropDownOnFirstPage>
          <MainAfterDropdown></MainAfterDropdown>
        </>
      }

      <SecondPage key="2"></SecondPage>
      <ThirdPage key="3"></ThirdPage>
      <FourthPage key="4"></FourthPage>
      <FifthPage key="5"></FifthPage>
      <SixthPage key="6"></SixthPage>
      <SeventhPage key="7"></SeventhPage>
      {/* <MeetTheTeam></MeetTheTeam> */}
      <EighthPage key="8"></EighthPage>
      <NinethPage key="9"></NinethPage>
      <TenthPage key="10"></TenthPage>
      <EleventhPage key="11"></EleventhPage>
      {/* <SeventhPage></SeventhPage> */}
    </>
  )
}
