import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const navBar =() => {
    return (

<nav >
    <div>
    <h1 className={styles.text4} class="vertical-align: middle" >
        Hola, Claudia.
    </h1>
        <div class="text-right"><Image src="/claudiaOrtiz.png" width={36} height={36}/></div>
    </div>  
</nav>
    );
};


export default navBar;