import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import { Scope, FormHandles } from '@unform/core';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';
import rocketIcon from '../../assets/images/icons/rocket.svg';

import './styles.css';

interface IFormData {
    name: string,
    avatar: string,
    whatsapp: string;
    bio: string;
    subject: string;
    cost: string;
    schedule: ISchedule;
}

interface ISchedule {
    week_day: Array<string>;
    from: Array<string>;
    to: Array<string>;
}

const TeacherForm: React.FC = function () {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' },
    ]);

    function addNewScheduleItem() {
        if (scheduleItems.length < 5) {
            let totalWeekDay = 0;

            scheduleItems.map(function (schedule) {
                totalWeekDay += 1;
            });

            setScheduleItems([...scheduleItems, {
                week_day: totalWeekDay,
                from: '',
                to: ''

            }]);
        }
    }

    const handleSubmit = async function (data: IFormData) {
        const { name, avatar, whatsapp, bio, subject, cost, schedule } = data;

        let newSchedule: Array<{}> = [];
        schedule.week_day.map(function(week_day, index) {
            newSchedule.push({
                week_day: Number(week_day),
                from: schedule.from[index],
                to: schedule.to[index],
            });

            return week_day;
        });

        const response = await api.post('/classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: newSchedule,
        });

        if (response.status === 201) {
            alert('Cadastro realizado!');
        }
        else {
            alert('Erro no cadastro');
        }
    }

    return (
        <div id="page-teacher-form">
            <Header title="Dar aulas">
                <div className="content-header">
                    <h1> Que incrível que você quer dar aulas. </h1>

                    <div className="sub-title">
                        <p> O primeiro passo, é preciso preencher esse formulário de inscrição. </p>
                        <p>
                            <img src={rocketIcon} alt="Foguete" />
                            Prepare-se! <br /> vai ser o máximo.
                        </p>
                    </div>
                </div>
            </Header>

            <main>
                <Form onSubmit={handleSubmit}>
                    <div className="content">
                        <fieldset>
                            <legend> Seus dados </legend>

                            <div className="box" id="profile-info">
                                <div className="profile">
                                    <img src="https://avatars2.githubusercontent.com/u/45855953?s=460&u=6a055c645a5ebcd966e80d8d43467bf5987bd9d9&v=4" alt="avatar" />
                                    <p> Henrique </p>
                                </div>

                                <Input name="whatsapp" label="Whatsapp" type="tel" pattern="[0-9]{2} [0-9]5-[0-9]4" placeholder="(__) _____-____"/>
                            </div>

                            <div className="box" id="about">
                                <Textarea name="about" label="Biografia" />
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend> Sobre a aula </legend>

                            <div className="box" id="subject-info">
                                <Select
                                    name="subject"
                                    label="Matéria"
                                    defaultValue="0"
                                    options={[
                                        { value: 'Português', label: "Português" },
                                        { value: 'Matemática', label: "Matemática" },
                                        { value: 'Geografia', label: "Geografia" },
                                        { value: 'Biologia', label: "Biologia" },
                                        { value: 'Física', label: "Física" },
                                        { value: 'Quimica', label: "Quimica" },
                                        { value: 'Artes', label: "Artes" },
                                    ]}
                                />

                                <Input name="cost" label="Custo por hora" />
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>
                                Horários disponíveis
                                <button type="button" onClick={function () {
                                    addNewScheduleItem();
                                }}> + Novo horário </button>
                            </legend>

                            <div className="box" id="schedule-info">
                                <Scope path="schedule">
                                    {scheduleItems.map(function (schedule) {
                                        return (
                                            <div className="schedule-item" key={schedule.week_day}>
                                                <Select
                                                    name={"week_day-" + schedule.week_day}
                                                    label="Dia da semana"
                                                    defaultValue={schedule.week_day}
                                                    options={[
                                                        { value: "0", label: "Segunda-feira" },
                                                        { value: "1", label: "Terça-feira" },
                                                        { value: "2", label: "Quarta-feira" },
                                                        { value: "3", label: "Quinta-feira" },
                                                        { value: "4", label: "Sexta-feira" },
                                                    ]}
                                                />

                                                <Input name={"from-" + schedule.week_day} label="Das" type="time" />

                                                <Input name={"to-" + schedule.week_day} label="Até" type="time" />
                                                { console.log(scheduleItems)}
                                            </div>
                                        );
                                    })}
                                </Scope>
                            </div>
                        </fieldset>
                    </div>

                    <footer>
                        <div className="message-container">
                            <img src={warningIcon} alt="cuidado" />
                            <div className="message">
                                <strong> Importante! </strong>
                                <p> Preencha todos os campos corretamente. </p>
                            </div>
                        </div>

                        <button type="submit"> Salvar cadastro </button>
                    </footer>
                </Form>
            </main>
        </div>
    );
};

export default TeacherForm;