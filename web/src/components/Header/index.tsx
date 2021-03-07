import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = function ({ title, children }) {
    return (
        <div id="header-container">
            <header>
                <Link to="/home">
                    <img src={backIcon} alt="Voltar"/>
                </Link>

                <h2> { title } </h2>

                <img src={logoImg} alt="Logo"/>
            </header>

            { children }
        </div>
    );
};

export default Header;