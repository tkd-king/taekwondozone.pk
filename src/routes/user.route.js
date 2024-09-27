import { Router } from "express";
import {
  apdateAcountDetails,
  changeCurrentPassword,
  getCurrentUser,
  loginUser,
  logoutUser,
  ragisterUser,
  refreshAccessToken,
} from "../controller/user.controller.js";
import { varifyJWT, isAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post( ragisterUser );
router.route("/login").post( loginUser );
//secure routes
router.route("/logout").post(varifyJWT, logoutUser);
router.route("/refresh-token").post( varifyJWT ,refreshAccessToken);
router.route("/change-password").post(varifyJWT, changeCurrentPassword);
router.route("/current-user").get(varifyJWT, getCurrentUser);
router.route("/update-account").patch(varifyJWT, apdateAcountDetails);
export default router;
