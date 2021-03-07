import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import InputAccess from '../../components/InputAccess';

import backIcon from '../../assets/images/icons/back.svg';
import eyeIcon from '../../assets/images/icons/eye.svg';
import eyeVisibleIcon from '../../assets/images/icons/eye-visible.svg';
import logo from '../../assets/images/intro.svg';

import './style.css';

const Register: React.FC = function () {

    const [visiblePassword, setVisiblePassword] = useState(false);

    function handleSubmit() {

    }

    return (
        <div id="page-register">
            <div className="content">
                <div className="box" id="content-form">
                    <div className="content-form">
                        <Link to="/">
                            <img src={backIcon} alt="Voltar" />
                        </Link>

                        <Form onSubmit={handleSubmit}>

                            <h2> Cadastro </h2>
                            <p> Preencha os dados abaixo <br /> para começar. </p>

                            <div className="input-group">
                                <InputAccess
                                    name="name"
                                    placeholderInput="Nome"
                                    typeInput="simple"
                                    className="top"
                                />

                                <InputAccess
                                    name="surname"
                                    placeholderInput="Sobrenome"
                                    typeInput="simple"
                                    className="center"
                                />

                                <InputAccess
                                    name="email"
                                    placeholderInput="E-mail"
                                    typeInput="simple"
                                    type="email"
                                    className="center"
                                />

                                <InputAccess
                                    name="password"
                                    placeholderInput="Senha"
                                    typeInput="password"
                                    type={visiblePassword ? 'text' : 'password'}
                                    className="bottom"
                                >
                                    <span className="view-password">
                                        <img src={!visiblePassword ? eyeIcon : eyeVisibleIcon} alt="Mostrar senha" onClick={function () {
                                            setVisiblePassword(!visiblePassword);
                                        }} />
                                    </span>
                                </InputAccess>
                            </div>

                            <button type="submit"> Concluir cadastro </button>

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

export default Register;