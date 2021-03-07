import { Request, Response } from 'express';

import database from '../database/connection';

interface IUser {
    id: Number;
    avatar?: string;
    name?: string;
    surname?: string;
    email?: string;
    whatsapp: string;
    bio: string;
    subject: string;
    cost: Number;

    schedule?: ISchedule[];
}

interface ISchedule {
    week_day: Number;
    from: string;
    to: string;
    class_id?: Number;
}

export default class UsersController {

    async create(req: Request, res: Response) {
        const user: IUser = req.body;

        const trx = await database.transaction();

        try {

            await trx('users').update({
                'whatsapp': user.whatsapp,
                'bio': user.bio,
            }).where('id', '=', user.id);

            const classes = await trx('classes').insert({
                'subject': user.subject,
                'cost': user.cost,
                'user_id': user.id,
            });

            let scheduleItems: ISchedule[] = [];

            user.schedule?.map(function (schedule) {
                scheduleItems.push({
                    week_day: schedule.week_day,
                    from: schedule.from,
                    to: schedule.to,
                    class_id: classes[0],
                });
            });

            console.log(scheduleItems);

            await trx('class_schedule').insert(scheduleItems);

            // await trx.commit();

            return res.status(201).send();

        } catch (error) {
            await trx.rollback();
            console.log(error);
            return res.status(400).json({ message: 'Error while created a new user' });
        }
    }

    async update(req: Request, res: Response) {
        const user: IUser = req.body;

        const trx = await database.transaction();

        try {

            await trx('users').update({
                'name': user.name,
                'surname': user.surname,
                'avatar': user.avatar,
                'whatsapp': user.whatsapp,
                'email': user.email,
                'bio': user.bio,
            }).where('id', '=', user.id);

            await trx('classes').update({
                'subject': user.subject,
                'cost': user.cost,
            }).where('user_id', '=', user.id);

            const classesId = await trx('classes').select('id')
                .where('user_id', '=', user.id);

            await trx('class_schedule').delete()
                .where('class_id', '=', classesId[0].id);

            let scheduleItems: ISchedule[] = [];

            user.schedule?.map(function (schedule) {
                scheduleItems.push({
                    week_day: schedule.week_day,
                    from: schedule.from,
                    to: schedule.to,
                    class_id: classesId[0].id,
                });
            });

            await trx('class_schedule').insert(scheduleItems);

            await trx.commit();

            return res.status(200).json(classesId[0].id);

        } catch (error) {
            await trx.rollback();
            console.log(error);
            return res.status(400).json({ message: 'Erro while updating a user' });
        }
    }

    async show(req: Request, res: Response) {

        const trx = await database.transaction();

        try {

            const users = await trx('classes').
                join('users', 'classes.user_id', '=', 'users.id').
                    select('classes.*', 'users.*');

            const schedules: ISchedule[] = await trx('class_schedule').select('*');

            let teachers: IUser[] = [];

            // inicio do array do professores
            users.map(function (user) {
                teachers.push({
                    id: user.user_id,
                    name: user.name,
                    surname: user.surname,
                    email: user.email,
                    whatsapp: user.whatsapp,
                    bio: user.bio,
                    avatar: user.avatar,
                    subject: user.subject,
                    cost: user.cost,
                });
            });

            // separando os agendamentos de cada professor
            users.map(function (user, index) {
                let schedulesItems: ISchedule[] = [];

                schedules.map(function (schedule) {
                    if (schedule.class_id === user.id) {
                        schedulesItems.push(schedule);
                    }
                });

                teachers[index].schedule = schedulesItems;
            });

            await trx.commit();

            return res.status(200).json(teachers);

        } catch (error) {
            await trx.rollback();
            console.log(error);
            return res.status(400).json({ message: 'Unexpected error' });
        }
    }
}