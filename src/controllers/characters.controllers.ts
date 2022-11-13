import {Request, Response} from 'express'
import { pool } from '../database'
import {QueryResult} from 'pg'

export const getCharacters = async(req: Request, res: Response): Promise<Response> => {
    try{
        const results: QueryResult = await pool.query("SELECT * FROM characters");
        return res.status(200).json(results.rows); 
    }catch(e) {
        console.error(e);
        return res.status(500).json('Internal Server Error');
    }

}

export const getCharactersById = async(req: Request, res: Response): Promise<Response> => {
    try{
        const {id} = req.params;
        const stm = "SELECT * FROM characters WHERE id=$1"
        const results: QueryResult = await pool.query(stm, [parseInt(id)]);
        return res.status(200).json(results.rows); 
    }catch(e){
        console.error(e);
        return res.status(500).json("Internal Server Error");
    }
}