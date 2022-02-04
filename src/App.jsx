import React from 'react'
import styles from './App.module.scss'
import {Footer, Blog, Possibility, Features, WhatGPT3, Header} from "./containers";
import {Cta, Brand, Navbar} from "./components";

export function App () {
    return (
        <div className={styles['app']}>
                <div className={styles['gradient__bg']}>
                    <Navbar />
                    <Header />
                    <div className={styles['gradient__text']}></div>
                </div>

            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}