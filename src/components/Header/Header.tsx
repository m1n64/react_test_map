import React, {FC} from 'react';
import style from './header.module.scss';

type link = {
    name: string;
    link: string;
}

type propsType = {
    text: string;
    links: link[];
}

const Header: FC<propsType> = (props: propsType) => {
    return (
        <header className={style.wrapper}>

            <div className={style.logo}>{props.text}</div>

            <ul className={style.links}>
                {props.links.length ? props.links.map(e => <li>
                    <a href={e.link}>{e.name}</a>
                </li>) : <div>Ссылок няма</div>
                }
            </ul>

        </header>
    );
};

export default Header;