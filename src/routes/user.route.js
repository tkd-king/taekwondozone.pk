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
import { verifyJWT, isAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

// User Authentication Routes
router.route("/register").post(ragisterUser);
router.route("/login").post(loginUser);

// Secure User Routes
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(verifyJWT, refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router.route("/current-user").get(verifyJWT, getCurrentUser);
router.route("/update-account").patch(verifyJWT, apdateAcountDetails);

// Uncomment and add admin routes if necessary
// router.route("/admin/dashboard").get(verifyJWT, isAdmin, adminDashboard);

export default router;
