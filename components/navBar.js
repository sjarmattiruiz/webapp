import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

 const navBar =() => {
    return (


        <div className={styles.navBar1}>
          <div className={styles.navBar2}>
           <a href="/">Hola, Claudia.</a>
          </div>
          <div className={styles.navBar3}>
           <a href="/about">About</a>
           </div>
       </div>

    );
};


export default navBar;