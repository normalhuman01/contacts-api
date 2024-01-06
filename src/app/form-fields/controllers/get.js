import Forms from '../../../models/form-fields';

/**
 * @api {get} /form-fields Get fields list
 * @apiName Get form fields
 * @apiGroup Form
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       error: false,
 *       result: [
 *          {
 *          id: 999,
 *          "label": "Test",
 *          "name": "test",
 *          " type": "text",
 *          "required": false,
 *           "errorMessage": "Not valid"
 *         }
 *       ]
 *     }
 */

export default async () => {
  return Forms.findAll();
};