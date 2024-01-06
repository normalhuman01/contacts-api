import Contacts from '../../../models/contacts';

/**
 * @api {get} /contacts Get contacts list
 * @apiName Get contacts
 * @apiGroup Contact
 * @apiParam {Number} id COntact's unique ID.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       error: false,
 *       result: [
 *          {
 *            "name": "test"
 *            "phone": "+241241414"
 *            "date": "11/24/2020"
 *          }
 *        ]
 *     }
 */

export default async req => {
  const { id } = req.params;
  if (id) return Contacts.findByPk(id);
  return Contacts.findAll();
};