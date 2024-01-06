import { checkMissingFields } from '../../../components/utils/helper';
import FormFields from '../../../models/form-fields';

/**
 * @api {post} /form-fields Add a new form field
 * @apiName Create a new form field
 * @apiGroup Form
 * @apiParam (Request body) {String} label Label
 * @apiParam (Request body) {String} name Name
 * @apiParam (Request body) {Sting} type Input type
 * @apiParam (Request body) {Boolean} required Is required field
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       error: false,
 *       result: {
 *          id: 999,
 *          "label": "Test",
 *          "name": "test",
 *          "type": "text",
 *          "required": false,
 *           "errorMessage": "Not valid"
 *         }
 *     }
 */

export default async req => {
  checkMissingFields(req.body, ['label', 'name', 'type', 'errorMessage']);
  return FormFields.create(req.body);
};