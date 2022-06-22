import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

 const Inputs =() => {
    return (


<div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <input
      type="text"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        top-262
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="N° de Afiliado"
    />
    <input
      type="text"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Contraseña"
    />
    
<div>
<h1 className={styles.text1}>Recordarme</h1>
</div>

<Link href="/homePage1">
        <div>
        <button className={styles.buttom2}>
            <h1 className={styles.text2}>Entrar</h1></button>
        </div>
</Link> 

<h1 className={styles.text3}>¿Olvidaste tu contraseña?</h1>


  </div>
</div>

       

    );
};


export default Inputs;