import express from "express";
import expressAsyncHandler from "express-async-handler";
import Add from "../model/adsModel.js";
import Company from "../model/companyModel.js";
import data from "../data.js";
import { isSubsequence } from "../utils.js";
const adsRouter = express.Router();

adsRouter.get(
  "/search/:key",
  expressAsyncHandler(async (req, res) => {
    const key = req.params.key.toLowerCase().split("");
    const searchedAds = await Add.find({}).populate("CID", "name url");
    const ads = searchedAds.filter((add) =>
      isSubsequence(add.CID[0].name.toLowerCase(), key)
    );
    if (ads) {
      return res.status(200).send(ads);
    } else {
      return res.status(400).send({ message: "Ads not found" });
    }
  })
);

adsRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    const advertismentsArray = [];
    for (let i = 0; i < data.Ads.length; i++) {
      const companyIds = [];
      const company = await Company.findOne({ companyId: data.Ads[i].CID });
      companyIds.push(company._id);
      const advertisment = {
        CID: companyIds,
        primaryText: data.Ads[i].primaryText,
        headline: data.Ads[i].headline,
        description: data.Ads[i].description,
        CTA: data.Ads[i].CTA,
        imageUrl: data.Ads[i].imageUrl,
      };
      advertismentsArray.push(advertisment);
    }

    const result = await Add.insertMany(advertismentsArray);
    return res.send(result);
  })
);

adsRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const allAdds = await Add.find({});
    return res.status(200).send(allAdds);
  })
);

export default adsRouter;
