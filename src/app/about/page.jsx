import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="about"
          className={styles.img}
        />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting Award winning digital Experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            repellendus magnam dicta veritatis architecto reiciendis
            <br />
            laboriosam temporibus quia quod alias, quae deleniti laudantium
            voluptatem voluptatibus cum necessitatibus voluptatum nobis
            molestiae non ut nesciunt! Alias,
            <br /> atque eum? Incidunt voluptatum consequatur ullam est harum
            saepe facere. Rem obcaecati itaque maxime laborum dolorum!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p  className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laudantium aliquam eius dolore repudiandae itaque?
            <br />
            - Lorem ipsum dolor sit amet.
            <br />
            - Lorem ipsum dolor sit amet.
            <br />
            - Lorem ipsum dolor sit amet.
            <br />
            <br />
            <br />
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Page;
