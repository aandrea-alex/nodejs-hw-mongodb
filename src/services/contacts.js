import Contact from '../models/contact.js';

export const getContacts = async (req, res) => {
  const contacts = await Contact.find();

  res.send({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactById = async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findById(id);

  if (contact === null) {
    return res.status(404).send({ status: 404, message: 'Contact not found' });
  }

  res.send({
    status: 200,
    message: `Successfully found contact with id ${id}!`,
    data: contact,
  });
};
