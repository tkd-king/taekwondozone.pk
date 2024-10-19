import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  console.log("Cookies: ", req.cookies);
  console.log("Authorization Header: ", req.header("Authorization"));

  try {
    // Get the access token from cookies instead of refreshToken
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    console.log("Token: ", token);

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    // Verify the token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log("Decoded Token: ", decodedToken);

    // Find the user by ID from the decoded token
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
    console.log("User: ", user);

    if (!user) {
      throw new ApiError(401, "Invalid access token");
    }

    // Attach the user object to the request for further use
    req.user = user;
    next();
  } catch (error) {
    console.error("Error: ", error);
    res.status(401).json({ message: "Invalid access token", error: error.message });
  }
});


// Admin check middleware
export const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); // User is admin, proceed
  } else {
    res.status(403).json({ message: 'Access denied.' }); // Access denied
  }
};
