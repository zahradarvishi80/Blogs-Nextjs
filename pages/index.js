import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import End from './component/End';
import Home from './Home';
export default function App() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      {/* <End/> */}
    </div>
  )
}
