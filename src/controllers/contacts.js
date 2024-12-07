import createHttpError from 'http-errors';
import {
  getAllContacts,
  getContactById,
  createContact,
  deleteContact,
  updateContact,
} from '../services/contacts.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getContactsCtrl = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);
  const userId = req.user._id;
  const contacts = await getAllContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter: { ...filter, userId },
  });
  res.send({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdCtrl = async (req, res) => {
  const { id } = req.params;

  const contact = await getContactById(id);
  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.send({
    status: 200,
    message: `Successfully found contact with id ${id}!`,
    data: contact,
  });
};

export const createContactCtrl = async (req, res) => {
  const userId = req.user._id;
  const payload = { ...req.body, userId };
  const contact = await createContact(payload);

  res.status(201).json({
    status: 201,
    message: `Successfully created a contact!`,
    data: contact,
  });
};

export const deleteContactCtrl = async (req, res) => {
  const { id } = req.params;

  const contact = await deleteContact(id);
  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(204).send();
};

export const upsertContactCtrl = async (req, res) => {
  const { id } = req.params;

  const result = await updateContact(id, req.body, {
    upsert: true,
  });

  if (!result) {
    throw createHttpError(404, 'Contact not found');
  }

  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: `Successfully upserted a contact!`,
    data: result.contact,
  });
};

export const patchContactCtrl = async (req, res) => {
  const { id } = req.params;
  const result = await updateContact(id, req.body);

  if (!result) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: `Successfully patched a contact!`,
    data: result.contact,
  });
};
