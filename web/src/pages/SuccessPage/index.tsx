import React from 'react';
import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';

const SuccessPage: React.FC = function () {
    return (
        <div id="success-page">
            <div className="content">
                <img src={successIcon} alt="Icone de sucesso"/>
                <h2> Cadastro concluido </h2>
                <p> Agora vc faz parte da plataforma do Proffy. Tenha uma otima experiencia </p>
                <Link to="/"> Fazer login </Link>
            </div>
        </div>
    );
}

export default SuccessPage;