import { type JSX } from "react";
import Style from "./NewsCard.module.css"

export interface NewsCardProps {
    image: string;
    title: string;
    content: string;
};

export default function NewsCard({ image, title, content }: NewsCardProps): JSX.Element
{
    return (
        <div className={Style.NewsCard}>
            <img src={`./assets/${image}.jpg`} alt={title} draggable={false} />
            <div>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    );
}