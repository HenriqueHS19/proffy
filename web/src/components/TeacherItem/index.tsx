import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import arrowRightIcon from '../../assets/images/icons/arrow-right.svg';

import api from '../../services/api';

import './styles.css';

interface ITeacher {
    id: number;
    avatar: string;
    name: string;
    subject: string;
    bio: string;
    cost: string;
    whatsapp: string;
}

const TeacherItem: React.FC<ITeacher> = function ({ id, avatar, name, subject, bio, cost, whatsapp }) {

    async function handleConnection() {
        await api.post('connections', {
            user_id: id,
        });
    }

    return (
        <article className="teacher-item">
            <div className="content">
                <header>
                    <img src={avatar} alt="Henrique" />
                    <div>
                        <strong> {name} </strong>
                        <span> {subject} </span>
                    </div>
                </header>

                <p> Entusiasta das melhores tecnologias de química avançada.

Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões. </p>

                <div className="schedule">
                    <div className="item">
                        <p>
                            Dia
                        <strong> Segunda </strong>
                        </p>

                        <p>
                            Horário
                        <strong> 8h - 18h </strong>
                        </p>
                    </div>
                </div>

                <div className="schedule-mobile">
                    <span>
                        <p> Dia </p>
                        <p> Horário </p>
                    </span>

                    <div className="item">
                        <span>
                            <strong> Segunda </strong>
                            <img src={arrowRightIcon} alt="Flecha"/>
                            <strong> 8h - 18h </strong>
                        </span>
                    </div>
                </div>
            </div>
            <footer>
                <p>
                    Preço/hora
                    <strong>{cost}</strong>
                </p>

                <a
                    href={`https://wa.me/${whatsapp}`}
                    target='blank'
                    onClick={handleConnection}>
                    <img src={whatsAppIcon} alt="WhatsApp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
};

export default TeacherItem;