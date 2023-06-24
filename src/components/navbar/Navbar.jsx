"use client"
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link className={styles.logo} href="/">Emon</Link>
            <div className={styles.links}>
                <Link className={styles.link} href="/">Home</Link>
                <Link className={styles.link} href="/portfolio">Portfolio</Link>
                <Link className={styles.link} href="/blog">Blog</Link>
                <Link className={styles.link} href="/about">About</Link>
                <Link className={styles.link} href="/contact">Contact</Link>
                <Link className={styles.link} href="/dashboard">Dashboard</Link>
                <button className={styles.logout} onClick={() => console.log('logged out')}>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;