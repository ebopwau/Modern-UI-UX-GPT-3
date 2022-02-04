import React from "react";
import styles from './Header.module.scss'
import appStyles from '../../App.module.scss'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

export const Header = () => {
    return (
    <div className={`${styles['gpt3__header']} ${appStyles['section__padding']}`} id={'home'}>
        <div className={styles['gpt3__header-content']}>
            <h1 className={appStyles['gradient__text']}>
                Let’s Build Something
                amazing with GPT-3
                OpenAI
            </h1>
            <p>
                Yet bed any for travelling assistance indulgence unpleasing.
                Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
                Party we years to order allow asked of.
            </p>

            <div className={styles['gpt3__header-content__input']}>
                <input type="email" placeholder={'Your email adress'}/>
                <button type={'button'}>Get Started</button>
            </div>

            <div className={styles['gpt3__header-content__people']}>
                <img src={people} alt="people"/>
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>
        <div className={styles['gpt3__header-image']}>
            <img src={ai} alt="ai"/>
        </div>
    </div>
    )
}