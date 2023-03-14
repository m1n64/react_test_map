import React, {FC} from 'react';
import style from './card.module.scss';

export type propsType = {
    name: string;
    description: string;
}

const Card: FC<propsType> = (props: propsType) => {
    return (
        <div className={style.wrapper}>
            <h3 className={style.name}>{props.name}</h3>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};

export default Card;