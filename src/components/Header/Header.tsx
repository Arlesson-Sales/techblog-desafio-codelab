import { type JSX } from "react";
import Style from "./Header.module.css";

export default function Header(): JSX.Element
{
    return (
        <header className={Style.HeaderContainer}>
            <div className="CentralizeContainer">
                <div className={Style.HeaderTitleZone}>
                    <h1>Encontre os <span>melhores artigos</span><br />de programação em um só lugar</h1>
                    <h2>Explore o topo da programação em um só lugar!<br />Seu destino único para dicas e tendências atuais.</h2>
                    <button>BUSCAR ARTIGOS</button>
                </div>
                <img className={Style.HeaderLogoImg} src="./assets/logo.png" alt="site image logo" draggable={false} />
            </div>
        </header>
    );
}