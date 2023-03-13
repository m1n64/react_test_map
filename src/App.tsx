import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";

function App() {
    const searchLinks = [
        {
            name: "googl",
            link: "https://www.google.com/"
        },
        {
            name: "yandex",
            link: "https://yandex.ru/"
        },
        {
            name: "yahoo",
            link: "https://ru.search.yahoo.com/"
        }
    ]

    return (
        <div className="App">
            <Header text={"wildberriesANALog"} links={searchLinks}/>

            <section className="cardsBlock">
                <Card name={"Пенис длинный 15см"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, libero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, libero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, libero."}/>
                <Card name={"Анальная затычка"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, libero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, libero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, libero."}/>
                <Card name={"Костюм медсестры"}
                      description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, libero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, libero. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, libero."}/>

            </section>
        </div>
    );
}

export default App;

