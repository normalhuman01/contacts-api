import express from 'express';
import getHandler from './controllers/get';
import createHandler from './controllers/create';
import deleteHandler from './controllers/delete';

import wrapResponse from '../../middleware/response';

const router = express.Router();

router.get('/:id?', wrapResponse(getHandler));
router.post('/', wrapResponse(createHandler));
router.delete('/:id', wrapResponse(deleteHandler));

export default router;