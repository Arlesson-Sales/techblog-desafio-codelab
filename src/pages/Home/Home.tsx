import { type JSX } from "react";
import Style from "./Home.module.css";
import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm/ContactForm";
import NewsCard, { type NewsCardProps } from "../../components/NewsCard/NewsCard";

export default function HomePage(): JSX.Element
{
    const data: NewsCardProps[] = [
        { image: "image-6", title: "O que é linguagem de programação? Conheça as principais", content: "Uma das mais populares vertentes da tecnologia da informação, a área de..." },
        { image: "image-5", title: "Python: por que a linguagem é tão usada para Data Science e finanças?", content: "O mundo da programação conta com algumas opções de linguagem para..." },
        { image: "image-4", title: "GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários", content: "O popular serviço de repositório de código GitHub foi adquirido pela..." },
        { image: "image-3", title: "15 comandos no GIT que os desenvolvedores precisam saber", content: "Dominar os comandos GIT é uma habilidade que se conquista com..." },
        { image: "image-2", title: "GIT e GitHub: o que são e quais as diferenças entre eles?", content: "Git e GibHub são dois softwares de controle de versão essenciais para..." },
        { image: "image-1", title: "GitHub Copilot ganha integração com GPT-4 e interface conversacional", content: "O GitHub Copilot, ferramenta de desenvolvimento baseada em IA..." }
    ];

    return (
        <main>
            <Header />
            <section className={`${Style.NewsCardsContainer} CentralizeContainer`}>
                <header>
                    <h2>Artigos recomendados</h2>
                </header>
                <div>
                    { data.map((cardData: NewsCardProps, index: number): JSX.Element => <NewsCard key={index} {...cardData} />) }
                </div>
            </section>
            <footer className={Style.FooterContainer}>
                <ContactForm />
            </footer>
        </main>
    );
}