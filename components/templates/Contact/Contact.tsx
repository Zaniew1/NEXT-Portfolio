"use client"
import { useState } from 'react'
import styles from './Contact.module.css'
import { SectionHeader } from '@/components/atoms/SectionHeader/SectionHeader';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const [t] = useTranslation("global");
    const [validName , setValidName] = useState<boolean>(false);
    const [validEmail , setValidEmail] = useState<boolean>(false);
    const [validText , setValidText] = useState<boolean>(false);
    const [invalidName, setInvalidName] = useState<string>("")
    const [invalidEmail, setInvalidEmail] = useState<string>("")
    const [invalidText, setInvalidText] = useState<string>("")
    const isValidName = (event: React.FormEvent<HTMLInputElement> ) => {
        const text = event.currentTarget.value
        setValidName(false);
        if(text.length == 0) return setInvalidName(''); 
        if(text.length < 3) return setInvalidName("Imię jest za krótkie, minimum 3 znaki");
        if(text.length > 50) return setInvalidName("Imię jest za długie, maksimum 50 znaków");
        setInvalidName('');
        return setValidName(true);
    }
    const isValidEmail = (event:React.FormEvent<HTMLInputElement>) => {
        const text = event.currentTarget.value
        setValidEmail(false); 
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const test =regex.test(text);
        if(text.length == 0) return setInvalidEmail('');
        if(text.length < 5) return setInvalidEmail("Email jest za krótki, minimum 5 znaków");
        if(text.length > 50) return setInvalidEmail("Email jest za długi, maksimum 50 znaków");
        if(!test) return setInvalidEmail("Niepoprawny email");
        setInvalidEmail('');
        return setValidEmail(true);
    }
    const isValidText = (event:React.FormEvent<HTMLTextAreaElement>) => {
        const text = event.currentTarget.value;
        setValidText(false);
        if(text.length == 0) return setInvalidText('');
        if(text.length < 20) return setInvalidText("Tekst jest za krótki, minimum 20 znaków");
        if(text.length > 500) setInvalidText("Tekst jest za długi, maksimum 500 znaków");
        setInvalidText('');
        return setValidText(true);
    }
    const sendText = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    return (

        <div className={styles.contact} >
            <SectionHeader>{t("menu.contact")}</SectionHeader>
            <form className={styles.contact__form} onSubmit={sendText}>
                <div className={styles.contact__form__line}>
                    <label htmlFor='form__name' className={styles.contact__form__line__label}>{t("contact.name")}</label>
                    <input onBlur={(e)=>isValidName(e)} id={"form__name"} className={styles.contact__form__line__input} type="text" required/>
                    <span className={`${styles.contact__form__line__span__gold} ${validName ? styles.contact__form__line__span__gold__active: ""}`}></span>
                    <span className={styles.contact__form__line__span}></span>
                    <span className={`${invalidName !== "" ? styles.contact__form__line__error : styles.contact__form__line__error__inactive }`}>{invalidName}</span>
                </div>
                <div className={styles.contact__form__line}>
                    <label htmlFor='form__mail' className={styles.contact__form__line__label}>E-mail</label>
                    <input onBlur={(e)=>isValidEmail(e)} id={"form__mail"} className={styles.contact__form__line__input} type="email" required/>
                    <span className={`${styles.contact__form__line__span__gold} ${validEmail ? styles.contact__form__line__span__gold__active: ""}`}></span>
                    <span className={styles.contact__form__line__span}></span>
                    <span className={`${invalidEmail !== "" ? styles.contact__form__line__error : styles.contact__form__line__error__inactive }`}>{invalidEmail}</span>
                </div>
                <div className={styles.contact__form__line}>
                    <label htmlFor='form__text' className={styles.contact__form__line__label}>{t("contact.message")}</label>
                    <textarea onBlur={(e)=>isValidText(e)} id={"form__text"}  className={styles.contact__form__line__textarea} required></textarea>
                    <span className={`${styles.contact__form__line__span__gold} ${validText ? styles.contact__form__line__span__gold__active: ""}`}></span>
                    <span className={styles.contact__form__line__span}></span>
                    <span className={`${invalidText !== "" ? styles.contact__form__line__error : styles.contact__form__line__error__inactive }`}>{invalidText}</span>
                </div>
                <div className={styles.contact__form__submit}>
                    <input className={`${styles.contact__form__submit__input } ${validEmail &&  validName && validText ? styles.contact__form__submit__input__active : styles.contact__form__submit__input__inactive}`} type="submit" value={t("contact.send")}/>
                </div>
            </ form>
        </div>
    )
}