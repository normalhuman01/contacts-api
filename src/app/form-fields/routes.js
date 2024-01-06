import express from 'express';
import getHandler from './controllers/get';
import createHandler from './controllers/create';
import wrapResponse from '../../middleware/response';

const router = express.Router();

router.get('/', wrapResponse(getHandler));
router.post('/', wrapResponse(createHandler));

export default router;