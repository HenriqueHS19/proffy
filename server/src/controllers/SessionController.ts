import { Request, Response } from 'express';

import database from '../database/connection';

export default class UsersController {

    async create(req: Request, res: Response) {
        const { name, surname, email, password } = req.body;

        const trx = await database.transaction();

        try {

            await trx('users').insert({
                name,
                surname,
                email,
                password,
            });

            await trx.commit();

            return res.status(201).send();

        } catch (error) {
            await trx.rollback();
            console.log(error);
            return res.status(400).json({ message: 'Error while creating a new user' });
        }
    }

    async index(req: Request, res: Response) {
        const { email, password } = req.body;

        const trx = await database.transaction();

        try {

            const user = await trx('users').select('*')
                .where('email', email).andWhere('password', password);

            await trx.commit();

            if (user[0]) {
                return res.status(200).json(user);
            }

            return res.status(404).json({ message: 'Email or password incorrect' })

        } catch (error) {
            await trx.rollback();
            console.log(error);
            return res.status(404).json({ message: 'User not encountered' });
        }
    }
}