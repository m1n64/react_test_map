import React from 'react';
import './App.css';
import Header, { link } from "./components/Header/Header";
import Card, { propsType as card } from "./components/Card/Card";

function App() {
    const searchLinks: link[] = [
        {
            name: "Мой аккаунт",
            link: "/profile/"
        },
        {
            name: "Доставки",
            link: "/delivery/"
        },
        {
            name: "Корзина",
            link: "/cart/"
        }
    ];

    const cards: card[] = [
        {
            name: "Я помню пенис большой",
            description: "Пенис пенис пися пися говно говно жопа жопа член пизда говно стас пидор"
        },
        {
            name: "Я знаю пенис большой",
            description: "Пенис пенис пися пися говно говно жопа жопа член пизда говно стас пидор"
        },
        {
            name: "Я помню пенис. большой",
            description: "Пенис пенис пися пися говно говно жопа жопа член пизда говно стас пидор"
        },
        {
            name: "Я помню ооооооо",
            description: "Пенис пенис пися пися говно говно жопа жопа член пизда говно стас пидор"
        },
        {
            name: "Я помню пенис большой",
            description: "Пенис пенис пися пися говно говно жопа жопа член пизда говно стас пидор"
        }
    ];

    return (
        <div className="App">
            <Header text={"wildberriesANALog"} links={searchLinks}/>

            <section className="cardsBlock">
                {cards.length ? cards.map(card => 
                    <Card name={card.name} description={card.description} />)
                    : <div>Товаров нету :(</div>
                }
            </section>
        </div>
    );
}

export default App;

