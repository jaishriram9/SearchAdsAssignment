import express from "express";
import expressAsyncHandler from "express-async-handler";
import Company from "../model/companyModel.js";
import data from '../data.js'
const companyRouter = express.Router();

companyRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Company.remove({});
    const result = await Company.insertMany(data.Company);
    return res.send(result);
  })
);

export default companyRouter;