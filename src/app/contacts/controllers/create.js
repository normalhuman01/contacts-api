import { checkMissingFields, validatePhoneNumber } from '../../../components/utils/helper';
import Contacts from '../../../models/contacts';
import FormFields from '../../../models/form-fields';

/**
 * @api {post} /contacts Create a new contact
 * @apiName Create contact
 * @apiGroup Contact
 * @apiParam (Request body) {String} name Contact name
 * @apiParam (Request body) {Sting} phone Contact phone number
 * @apiParam (Request body) {String} date Contact date
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       error: false,
 *       result: {
 *          "name": "John",
 *          "phone": "+37411111111",
 *          "date": "11/24/2020"
 *          }
 *     }
 */

export default async req => {
  const formFields = (await FormFields.findAll({ where: { required: true }, raw: true })).map(i => i.name);
  checkMissingFields(req.body, formFields);
  if (!validatePhoneNumber(req.body.phone)) throw new Error('Phone number is not valid');
  return Contacts.create(req.body);
};