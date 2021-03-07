import React from 'react';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const Profile: React.FC = function () {

    function handleSubmit() {

    }

    return (
        <div id="profile-page">
            <Header title="Meu perfil">
                <div className="content">
                    <img src="https://avatars2.githubusercontent.com/u/45855953?s=460&u=6a055c645a5ebcd966e80d8d43467bf5987bd9d9&v=4" alt="avatar"/>
                    <strong> Henrique </strong>
                    <p> Matemática </p>
                </div>
            </Header>

            <main>
                <Form onSubmit={handleSubmit}>
                    <div className="content">
                        <fieldset>
                            <legend> Seus dados </legend>

                            <div className="item" id="name">
                                <Input name="name" label="Nome" />
                                <Input name="surname" label="Sobrenome" />
                            </div>

                            <div className="item" id="contact">
                                <Input name="email" label="E-mail" />
                                <Input name="whatsapp" label="Whatsapp" />
                            </div>

                            <div className="item">
                                <Textarea name="about" label="Biografia" about="(Máximo de 300 caracteres)" />
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend> Sobre a aula </legend>

                            <div className="item" id="subject">
                                <Select name="subject" label="Matéria" options={[
                                    { value: 'Português', label: "Português" },
                                    { value: 'Matemática', label: "Matemática" },
                                    { value: 'Geografia', label: "Geografia" },
                                    { value: 'Biologia', label: "Biologia" },
                                    { value: 'Física', label: "Física" },
                                    { value: 'Quimica', label: "Quimica" },
                                    { value: 'Artes', label: "Artes" },
                                ]} />

                                <Input name="cost" label="Custo por hora" />
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend> Horários disponíveis </legend>

                            <div className="item" id="schedule">
                                <div className="schedule-item">
                                    <Select name="week-day" label="Dia da semana" options={[
                                        { value: "0", label: "Segunda-feira" },
                                        { value: "1", label: "Terça-feira" },
                                        { value: "2", label: "Quarta-feira" },
                                        { value: "3", label: "Quinta-feira" },
                                        { value: "4", label: "Sexta-feira" },
                                    ]} />

                                    <Input name="from" label="Das" />
                                    <Input name="to" label="Até" />
                                </div>

                                <div className="container-button">
                                    <hr/>
                                    <button> Excluir horário </button>
                                    <hr/>
                                </div>
                            </div>
                        </fieldset>
                    </div>

                    <footer>
                        <div className="message">
                            <img src={warningIcon} alt="Cuidado"/>
                            <p>
                                <strong> Importante! </strong>
                                Preencha todos os dados corretamente.
                            </p>
                        </div>

                        <button> Salvar cadastro </button>
                    </footer>
                </Form>
            </main>
        </div>
    );
}

export default Profile;