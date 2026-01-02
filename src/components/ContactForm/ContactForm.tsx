import { type JSX } from "react";
import Style from "./ContactForm.module.css"

export default function ContactForm(): JSX.Element
{
    return (
        <form method="POST" action="#" className={Style.FormContainer}>
            <h1>Entre em contato</h1>
            <input className={Style.FormContactInput} name="name" type="text" placeholder="Nome" required />
            <input className={Style.FormContactInput} name="email" type="email" placeholder="Email" required />
            <textarea className={Style.FormContactInput} placeholder="Assunto da mensagem" required></textarea>
            <input type="submit" value="ENTRAR EM CONTATO" />
        </form>
    );
}