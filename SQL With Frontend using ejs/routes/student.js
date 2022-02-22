import { Router } from 'express';
const router = Router();
import databaseService from '../service/databaseService.js';

router.post('/',(req,res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const address = req.body.address;

    databaseService.query('insert into `student` (`firstName`,`lastName`,`address`) values (?,?,?);',
    [firstName,lastName,address],(err,results,fields)=>{
        if(err)
        {
            res.status(500).send(err);
        }
        else{
            res.status(200).send('Data inserted successfully');
        }
    });
});

export default router;