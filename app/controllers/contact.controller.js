import ContactService from "../services/contact.service.js";
import MongoDB from "../utils/mongodb.utils.js";
import ApiError from "../api-error.js";

export const create = async (req, res, next) => {
  if (!req.body?.name) {
    return next(new ApiError(400, "Name can not be empty"));
  }
  try {
    const contactService = new ContactService(MongoDB.client);
    const document = await contactService.create(req.body);
    return res.send(document);
  } catch (error) {
    console.error("Error creating contact:", error);
    return next(
      new ApiError(500, "An error occurred while creating the contact"),
    );
  }
};
export const findAll = async (req, res, next) => {
  let documents = [];
  try {
    const contactService = new ContactService(MongoDB.client);
    const { name } = req.query;
    if (name) {
      documents = await contactService.findByName(name);
    } else {
      documents = await contactService.find({});
    }
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while retrieving contacts"),
    );
  }
  return res.send(documents);
};

export const findOne = async (req, res, next) => {
  try {
    const contactService = new ContactService(MongoDB.client);
    const document = await contactService.findById(req.params.id);
    if (!document) {
      return next(new ApiError(404, "Contact not found"));
    }
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, `Error retrieving contact with id=${req.params.id}`),
    );
  }
};

export const update = (req, res) => {
  res.send({ message: "update handler" });
};

export const delete_ = (req, res) => {
  res.send({ message: "delete handler" });
};

export const deleteAll = (req, res) => {
  res.send({ message: "deleteAll handler" });
};

export const findAllFavorite = (req, res) => {
  res.send({ message: "findAllFavorite handler" });
};
