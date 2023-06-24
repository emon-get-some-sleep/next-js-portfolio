import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
const Footer = () => {
    
    return (
        <div className={styles.container}>
            <div>
                2023 Emon | All rights reserved
            </div>
            <div>
                
                <Image src="/1.png" width={15} height={15} alt="Emon" />
                <Image src="/2.png" width={15} height={15} alt="Emon" />
                <Image src="/3.png" width={15} height={15} alt="Emon" />
                <Image src="/4.png" width={15} height={15} alt="Emon" />
                
            </div>
        </div>
    );
};

export default Footer;