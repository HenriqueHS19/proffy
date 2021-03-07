import React, { useEffect, useState } from 'react';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';
import api from '../../services/api';

import smileIcon from '../../assets/images/icons/smile.svg';
import searchIcon from '../../assets/images/icons/search.svg';
import filterIcon from '../../assets/images/icons/filter.svg';
import arrowUpIcon from '../../assets/images/icons/arrow-up.svg';
import arrowDownIcon from '../../assets/images/icons/arrow-down.svg';

import './styles.css'

interface ITeacher {
    id: number;
    avatar: string;
    name: string;
    subject: string;
    bio: string;
    cost: string;
    whatsapp: string;
}

interface IForm {
    subject: string;
    week_day: string;
    time: string;
}

const TeacherList: React.FC = function () {

    const [teachers, setTeachers] = useState<ITeacher[]>([]);
    const [formVisible, setFormVisible] = useState(false);

    useEffect(function () {
        async function getTeachers() {
            const response = await api('/classes');
            setTeachers(response.data);
        }

        // getTeachers();
    }, []);

    const handleSubmit = async function (data: IForm) {
        const { subject, week_day, time } = data;

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data);
    };

    return (
        <div id="page-teacher-list">
            <Header title="Estudar">
                <div className="content">
                    <div className="message">
                        <h2> Estes são os <br /> proffys disponíveis. </h2>

                        <p>
                            <img src={smileIcon} alt="Icone"/>
                            Nós temos 32 <br /> professores
                        </p>

                        <h2 className="title-mobile"> Proffys <br /> disponíveis. </h2>

                        <p className="quant-mobile">
                            <img src={smileIcon} alt="Icone" />
                            32 professores
                        </p>
                    </div>

                    <span className="filter-button" onClick={function () {
                        setFormVisible(!formVisible);
                    }}>
                        <img src={filterIcon} alt="Filtro"/>
                        <p> Filtrar por dia, hora e matéria </p>
                        <img src={formVisible ? arrowUpIcon : arrowDownIcon} alt="Flecha"/>
                    </span>

                    <Form onSubmit={handleSubmit} id="search-teachers" className={formVisible ? 'view-form-mobile' : ''}>

                        <Select
                            name="subject"
                            label="Matéria"
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Educação física', label: 'Educação física' },
                            ]}
                        />

                        <Select
                            name="week_day"
                            label="Dia da Semana"
                            options={[
                                { value: '0', label: 'Segunda-feira' },
                                { value: '1', label: 'Terça-feira' },
                                { value: '2', label: 'Quarta-feira' },
                                { value: '3', label: 'Quinta-feira' },
                                { value: '4', label: 'Sexta-feira' },
                            ]}
                        />

                        <Input type="time" name="time" label="Hora" />

                        <button type="submit">
                            <img src={searchIcon} alt="Pesquisar"/>
                        </button>
                    </Form>
                </div>
            </Header>

            <main>
                <div className="box">
                    <TeacherItem
                        key={0}
                        id={1}
                        avatar="https://avatars2.githubusercontent.com/u/45855953?s=460&u=6a055c645a5ebcd966e80d8d43467bf5987bd9d9&v=4"
                        name="Henrique"
                        subject="Matemática"
                        bio="Qualquer coisa"
                        cost="R$ 75,00"
                        whatsapp="(11) 9 8507-6851"
                    />
                </div>
                {/* {teachers.map(function (teacher) {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            id={teacher.id}
                            avatar={teacher.avatar}
                            name={teacher.name}
                            subject={teacher.subject}
                            bio={teacher.bio}
                            cost={teacher.cost}
                            whatsapp={teacher.whatsapp}
                        />
                    );
                })} */}
            </main>
        </div>
    );
};

export default TeacherList;