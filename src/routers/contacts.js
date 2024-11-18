import { Router } from 'express';
import { getAllContacts, getContactById } from '../services/contacts.js';

const contactsRouter = Router();
contactsRouter.get('/contacts', async (req, res, next) => {
  try {
    const contacts = await getAllContacts();

    res.send({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
});

contactsRouter.get('/contacts/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const contact = await getContactById(id);

    if (!contact) {
      return res.status(404).send({
        message: 'Contact not found',
      });
    }

    res.send({
      status: 200,
      message: `Successfully found contact with id ${id}!`,
      data: contact,
    });
  } catch (error) {
    next(error);
  }
});

export default contactsRouter;
