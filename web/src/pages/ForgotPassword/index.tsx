import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import InputAccess from '../../components/InputAccess';

import backIcon from '../../assets/images/icons/back.svg';
import logo from '../../assets/images/intro.svg';

import './styles.css';

const ForgotPassword: React.FC = function () {

    function handleSubmit() {

    }

    return (
        <div id="page-forgot">
            <div className="content">
                <div className="box" id="content-form">
                    <div className="content-form">
                        <Link to="/">
                            <img src={backIcon} alt="Voltar" />
                        </Link>

                        <Form onSubmit={handleSubmit}>

                            <h2> Eita, esqueceu sua senha? </h2>
                            <p> Não esquenta, vamos dar um jeito nisso. </p>

                            <InputAccess name="email" placeholderInput = "E-mail" typeInput = "simple" />

                            <button type="submit"> Enviar </button>

                        </Form>
                    </div>
                </div>

                <div className="box" id="content-logo">
                    <img src={logo} alt="Logo" />
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;