import Contact from '../models/contact.js';

export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();

    res.send({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

export const getContactById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findById(id);

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
};
