import * as express from 'express';
import db from './db';

const router = express.Router();
router.get('/api/fishingCalendar', async (req, res)=>{
    try {
        let fishingCalendar = await db.fishingCalendar.all();
        res.json(fishingCalendar);
    }catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;