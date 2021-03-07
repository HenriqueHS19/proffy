import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/images/intro.svg';
import landingImg from '../../assets/images/landing.svg';

import logoffIcon from '../../assets/images/icons/logoff.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

const Home: React.FC = function () {

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(function () {
        async function getConnections() {
            const response = await api.get('connections');
            const { total } = response.data;
            setTotalConnections(total);
        }

        // getConnections();
    }, []);

    return (
        <div id="home-page">
            <div className="content">
                <div className="box" id="box-1">
                    <header>
                        <div className="profile-info">
                            <img src="https://avatars2.githubusercontent.com/u/45855953?s=460&u=6a055c645a5ebcd966e80d8d43467bf5987bd9d9&v=4" alt="Avatar" />
                            <p> Henrique </p>
                        </div>

                        <Link to="/">
                            <img src={logoffIcon} alt="Sair" />
                        </Link>
                    </header>

                    <div className="hero-image">
                        <img src={logoImg} alt="Logo" />
                    </div>
                </div>

                <div className="box" id="box-2">
                    <div className="group">
                        <div className="item">
                            <p className="wellcome">
                                Seja bem-vindo. <br />
                                <strong> O que deseja fazer? </strong>
                            </p>

                            <p className="connections">
                                Total de 280 conexões <br />
                            já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                            </p>
                        </div>

                        <div className="item container-buttons">
                            <Link to="/study">
                                <img src={studyIcon} alt="Icone do livro" />
                                Estudar
                            </Link>

                            <Link to="/give-classes">
                                <img src={giveClassesIcon} alt="Icone de TV" />
                                Dar aulas
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;