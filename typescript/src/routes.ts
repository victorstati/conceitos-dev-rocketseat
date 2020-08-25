import { Request, Response } from 'express';
import createUser from'./services/CreateUser';

export function helloWorld(req: Request, res: Response){
    const user = createUser({
        email: 'victor@gmail.com',
        password: '123456',
        techs: [
            'Node JS',
             'React JS', 
             'React Native',
             { title: 'Javascript', experience: 100}
        ],
    });

    return res.json({message: 'Hello Wold'});
}