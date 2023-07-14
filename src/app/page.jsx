// import Image from 'next/image'
import Button from '@/components/Button/Button';
import styles from './page.module.css'
import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>Turning your ideas into reality. We bring together the teams from global tech industry</p>
        <Button url="/portfolio" text="See Our Workds" />
       
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt="Hero" className={styles.img} />
      </div>
      
    </div>
  )
}
