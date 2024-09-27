import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"

export const varifyJWT = asyncHandler(async (req, _, next) => {
  console.log("Cookies: ", req.cookies);
  console.log("Authorization Header: ", req.header("Authorization"));

  try {
    const token = req.cookies?.refreshToken || req.header("Authorization")?.replace("Bearer ", "");
    console.log("Token: ", token);
    
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log("Decoded Token: ", decodedToken);
    
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
    console.log("User: ", user);
    
    if (!user) {
      throw new ApiError(401, "Invalid access token");
    }
    
    req.user = user;
    next();
  } catch (error) {
    console.error("Error: ", error);
    throw new ApiError(401, "Invalid access token", error.message);
  }
});

 export  const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next(); // User is admin, proceed to dashboard
    } else {
        res.status(403).send('Access denied.'); // Access denied
    }
};
