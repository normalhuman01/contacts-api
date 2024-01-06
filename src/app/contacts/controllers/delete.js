import { checkMissingFields } from '../../../components/utils/helper';
import Contacts from '../../../models/contacts';

/**
 * @api {delete} /contacts:id Delete a contact
 * @apiName Delete contact
 * @apiGroup Contact
 * @apiParam {Number} id Contact's unique ID.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       error: false,
 *       result: 'Successfully deleted'
 *     }
 */

export default async req => {
  checkMissingFields(req.params, ['id']);
  const { id } = req.params;
  await Contacts.destroy({ where: { id } });
  return 'Successfully deleted';
};