import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import InputAccess from '../../components/InputAccess';

import logo from '../../assets/images/intro.svg';
import eyeIcon from '../../assets/images/icons/eye.svg';
import eyeVisibleIcon from '../../assets/images/icons/eye-visible.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import rememberIcon from '../../assets/images/icons/remember.svg';

import './styles.css';

const Login: React.FC = function () {

    const [visiblePassword, setVisiblePassword] = useState(false);
    const [remember, setRemember] = useState(false);

    function handleSubmit() {

    }

    return (
        <div id="login-page">
            <div className="content">
                <div className="box" id="content-logo">
                    <img src={logo} alt="Logo" />
                </div>

                <div className="box" id="content-form">
                    <Form onSubmit={handleSubmit}>
                        <h2> Fazer login </h2>

                        <InputAccess
                            name="email"
                            placeholderInput="E-mail"
                            type="email"
                            typeInput="simple"
                            className="top"
                        />

                        <InputAccess
                            name="password"
                            placeholderInput="Senha"
                            type={visiblePassword ? 'text' : 'password'}
                            typeInput="password"
                            className="bottom"
                        >
                            <span className="view-password">
                                <img src={!visiblePassword ? eyeIcon : eyeVisibleIcon} alt="Ver senha" onClick={function () {
                                    setVisiblePassword(!visiblePassword);
                                }} />
                            </span>
                        </InputAccess>

                        <div className="options">
                            <div className="remember">
                                <span className={remember ? 'check' : ''} onClick={function () {
                                    setRemember(!remember);
                                }}>
                                    <img src={rememberIcon} alt="Lembrar" className={remember ? 'visible' : ''} />
                                </span>
                                <p> Lembrar-me </p>
                            </div>

                            <Link to="/forgot-password"> Esqueci minha senha </Link>
                        </div>

                        <button type="submit"> Entrar </button>

                    </Form>

                    <div className="footer">
                        <div className="register">
                            <p> Não tem uma conta? </p>
                            <Link to="/register"> Cadastre-se </Link>
                        </div>

                        <p>
                            É de graça
                                <img src={purpleHeartIcon} alt="Coração roxo" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;