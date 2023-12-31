import { Response } from "../constants/response.js";
import addressService from "../services/addressService.js";


const getById = async (req, res, next) => {
  const response = new Response();
  try {
    const responseFromService = await addressService.getById(req.query.id);

    response.status = 200;
    response.message = "ok";
    response.body = responseFromService;
  } catch (error) {
    console.log(
      "something went wrong: Controller: addressController.js",
      error
    );
    response.status = 400;
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

const getAllAddress = async (req, res, next) => {
  const response = new Response();

  try {
    const responseFromService = await addressService.getAllAddresses(
      req.query.page,
      req.query.size
    );

    response.status = 200;
    response.message = "ok";
    response.body = responseFromService;
  } catch (error) {
    console.log(
      "something went wrong: Controller: addressController.js",
      error
    );
    response.status = 400;
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

const createAddress = async function (req, res, next) {
  const response = new Response();
  try {
    const responseFromService = await addressService.createAddress(req.body, req.userId);

    response.status = 200;
    response.message = "OK";
    response.body = responseFromService;
  } catch (error) {
    console.log(
      "something went wrong: Controller: addressController.js",
      error
    );
    response.status = 400;
    response.message = error.message;
  } finally {
    return res.status(response.status).send(response);
  }
};

const deleteAddress = async function (req, res, next) {
  const response = new Response();
  try {
    const responseFromService = await addressService.deleteAddress( req.query.id, req.userId );

    response.status = 200;
    response.message = "OK";
    response.body = responseFromService;

  } catch (error) {
    console.log(
      "something went wrong: Controller: addressController.js",
      error
    );
    response.status = 400;
    response.message = error.message;
  } finally {
    return res.status(response.status).send(response);
  }
};

const putAddress = async function (req, res, next) {
  const response = new Response();
  try {
    const responseFromService = await addressService.updateAddress( req.query.id, req.body );

    response.status = 200;
    response.message = "OK";
    response.body = responseFromService;
  } catch (error) {
    console.log(
      "something went wrong: Controller: addressController.js",
      error
    );
    response.status = 400;
    response.message = error.message;
  } finally {
    return res.status(response.status).send(response);
  }
};

export default { getAllAddress, createAddress, deleteAddress, putAddress, getById };
