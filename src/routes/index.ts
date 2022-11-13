import {Router} from 'express'
import {getCharacters, getCharactersById} from '../controllers/characters.controllers';
const router = Router();

router.get('/characters', getCharacters);
router.get('/characters/:id', getCharactersById);
// router.post('/characters/:id', getCharacters);
// router.put('/characters/:id', getCharacters);
// router.delete('/characters/:id', getCharacters);


export default router;