import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const genrateAccessAndRefreshToken = async (userId) => {
  console.log("helo keasay ho");
  
  try {
    // Corrected user lookup
    const user = await User.findById(userId); 
    if (!user) {
      throw new ApiError(404, "User not found");
    }
    
    console.log("User retrieved successfully:", user);

    // Generate tokens
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    console.log("Generated Tokens:", { accessToken, refreshToken });

    // Assign refresh token to user
    user.refreshToken = refreshToken;
    console.log("User before saving:", user);

    // Save user and handle any errors
    await user.save({ validateBeforeSave: true })
      .then(() => console.log("User saved successfully"))
      .catch((err) => {
        console.error("Error saving user:", err);
        throw new ApiError(500, "Failed to save user");
      });

    return { refreshToken, accessToken };
  } catch (error) {
    console.error("Error in token generation:", error);
    throw new ApiError(500, "Something went wrong while generating access and refresh tokens");
  }
};

//asyncHandler
const ragisterUser = asyncHandler(async (req, res) => {
  //get user details from frontend 
  //validation - not empty
  //chek if user already exists: username , email
  //chek for images chek for avatar 
  //upload them to cloudinory , avatar 
  //create user object -  create entry in db
  //remove password and refreshtoken fields from response 
  //chek for user creation 
  //return res
  const { fullName, email, username, password } = req.body;
  console.log("email: ", email);
  console.log("fullName: ", fullName);
  console.log("username: ", username);
  console.log("password: ", password);
  

  if (
    [fullName, email, password, username].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required ");
  }
  const existedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists"); // mn nay bahut jaga apierror ky sath new nahe likha or error lea ab kio k mn nay ApiError ek cunstrontor likha h new add krna lazmi h ta k destructure kr sako :)
  }
  // console.log(req.files)
  // const avatarLocalePath = req.files?.avatar[0]?.path;
  // console.log(avatarLocalePath);

  // //  const coverImageLocalePath = req.files?.coverImage[0]?.path
  // //  console.log(coverImageLocalePath); [({proofed})]

  // if (!avatarLocalePath) {
  //   throw new ApiError(
  //     400,
  //     "Avatar file is required line:33 file user.controller.js"
  //   );
  // }

  // let coverImageLocalePath;
  // if (
  //   req.files &&
  //   Array.isArray(req.files.coverImage) &&
  //   req.files.coverImage.length > 0
  // ) {
  //   coverImageLocalePath = req.files?.coverImage[0]?.path;
  // }
  // const avatar = await uploadOnCloudinory(avatarLocalePath);
  // console.log(avatar.path);

  // const coverImage = await uploadOnCloudinory(coverImageLocalePath);
  // // console.log(coverImage.path);

  // if (!avatar) {
  //   throw new ApiError(
  //     400,
  //     "Avatar file is required line:44 file user.controller.js"
  //   );
  // }
  const user = await User.create({
    fullName,
    // avatar: avatar.url,
    // coverImage: coverImage?.url || "",
    email: email,
    password: password,
    username: username.toLowerCase(),

  });
  console.log("user her ---+++",user);
  
  // yaha pr mn nay mistake ky thy k | User ky jaga user likha or ghanta betha raha error ko lay kr next mistake naho kabhe :)
  // const createdUser =  await user.findById(User._id).select(
  //   "-password -refreshToken "
  // )
  // ek or mistake mn user._id ky jaga User._id likh raha tha kio mn nay find krna tha jo user abhe bana h but mn find kr raha tha jis kay pass _id h he nahe so thanks chatgpt :)
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  )
  console.log(createdUser);

  if (!createdUser) {
    throw new ApiError(500, "Some thing wents wrong while registring a User");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  // req body -> data
  // username or email
  //find the user
  //password check
  //access and refresh token
  //send cookie
  const { username, email, password } = req.body;
  if (!username && !email) {
    throw new ApiError(400, "username or email is required");
  }
  const user = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }
  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const { accessToken, refreshToken } = await genrateAccessAndRefreshToken(
    user._id
  );

  const logedInUser = await User.findById(user._id).select(
    " -password -refreshToken"
  );
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: logedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  // Ensure req.cookies is defined before destructuring
  const refreshToken = req.body; // Corrected
  console.log("Request Cookies:", req.cookies); // Log all cookies

  console.log("Incoming Refresh Token from Cookies:", refreshToken);

  if (!refreshToken) {
    return res.status(400).json(new ApiResponse(400, {}, "Refresh token is required"));
  }

  // Find the user based on the refresh token
  const user = await User.findOne({ refreshToken });

  if (!user) {
    return res.status(401).json(new ApiResponse(401, {}, "Invalid refresh token"));
  }

  // Proceed to logout by clearing the refresh token
  await User.findByIdAndUpdate(
    user._id,
    { $unset: { refreshToken: 1 } },
    { new: true }
  );

  return res.status(200).json(new ApiResponse(200, {}, "User logged out successfully"));
});



const refreshAccessToken = asyncHandler(async (req, res) => {
  // Get refresh token from cookies or body
  const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;
  console.log("Incoming Refresh Token:", incomingRefreshToken);

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request: Refresh token is required");
  }

  try {
    // Verify the refresh token
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    // Find the user based on the ID from the token
    const user = await User.findById(decodedToken?._id);
    console.log("User found:", user);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    // Check if the incoming refresh token matches the one in the database
    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is invalid or has expired");
    }

    // Generate new access and refresh tokens
    const options = {
      httpOnly: true,
      secure: true,
    };


    const { accessToken, newRefreshToken } = await genrateAccessAndRefreshToken(user._id);

    // Set cookies for access and new refresh tokens
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(new ApiResponse(
        200,
        { accessToken, refreshToken: newRefreshToken },
        "Access Token is refreshed successfully"
      ));
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

//////////

const changeCurrentPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  
  const user = await User.findById(req.user?._id);
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);
  if (!isPasswordCorrect) {
    throw new ApiError(401, "Incorrect current password");
  }
  user.password = newPassword;
  console.log("userpassowrd", user.password);
  
  await user.save({ validateBeforeSave: true });
  
  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});
const getCurrentUser = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, req.user, "current user fetched successfully"));
});
const apdateAcountDetails = asyncHandler(async (req, res) => {
  //mn nay postman say test kia but mn formdata bhej raha 
  //tha to required fields undifined a rahay thay
  //but mn nay jeasay json form mn data dia to fields mn data a gea :) 
  const { fullName, email, username } = req.body;
  console.log("fullname:",fullName,"email:",email,"username",username);
  
  if (!(fullName && email)) {
    throw new ApiError(400, "All fields are required");
  }
  const user = await User.findByIdAndUpdate(
    req.user?._id,
    {
      $set: {
        fullName,
        email: email,
        username,
      },
    },
    {
      new: true,
    }
  ).select("-password ");
  return res
    .status(200)
    .json(new ApiResponse(200, user, "account details updated successfully"));
});
const apdateUserAvatar = asyncHandler(async (req, res) => {
  const avatarLocalePath = req.file.path;
  if (!avatarLocalePath) {
    throw new ApiError(400, "Avatar file is missing");
  }
  const avatar = await uploadOnCloudinory(avatarLocalePath);
  if (!avatar.url) {
    throw new ApiError(400, "Error while uploading avatar");
  }
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        avatar: avatar.url,
      },
    },
    {
      new: true,
    }
  );
  return res
    .status(200)
    .json(new ApiResponse(200, user, "Avatar Updated Successfully"));
});
const apdateUserCoverImage = asyncHandler(async (req, res) => {
  const coverImageLocalPath = req.file.path;
  if (!coverImageLocalPath) {
    throw new ApiError(400, "Cover image file is missing");
  }
  const coverImage = await uploadOnCloudinory(coverImageLocalPath);
  if (!coverImage) {
    throw new ApiError(400, "Error while uploading coverImage");
  }

  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        coverImage: coverImage.url,
      },
    },
    {
      new: true,
    }
  ).select(" -password");

  return res
    .status(200)
    .json(new ApiResponse(200, user, "CoverImage Updated Successfully"));
});
// yaha say agregation piplines ka topic shoro hoa h :) mn is piplines ky video ko dobara dekhna chaho ga
const getUserChennleProfile = asyncHandler(async (req, res) => {
  const { username } = req.params;
  if (!username?.trim()) {
    throw new ApiError(400, "Username is missing");
  }
  const channel = await User.aggregate([
    {
      $match: {
        username: username?.toLowerCase(),
      },
    },
    {
      $lookup: {
        from: "subscriptions",
        localField: "_id",
        foreignField: "channel",
        as: "subscribers",
      },
    },
    {
      $lookup: {
        from: "subscriptions",
        localField: "_id",
        foreignField: "subscriber",
        as: "subscribedTo",
      },
    },
    {
      $addFields: {
        subscribersCount: {
          $size: "$subscribers",
        },
        channelSubscribedCount: {
          $size: "$subscribedTo",
        },
        isSubscribed: {
          $cond: {
            if: { $in: [req.user?._id, "$subscribers.subscriber"] },
            then: true,
            else: false,
          },
        },
      },
    },
    {
      $project: {
        fullName: 1,
        username: 1,
        subscribersCount: 1,
        channelSubscribedCount: 1,
        isSubscribed: 1,
        avatar: 1,
        coverImage: 1,
      },
    },
  ]);
  if (!channel?.length) {
    throw new ApiError(404, "channel does not exists");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(200, channel[0], "User channel fetched successfully")
    );
});

const getWatvchHistory = asyncHandler(async (req, res) => {
  const user = await User.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(req.user._id),
      },
    },
    {
      $lookup: {
        from: "videos",
        localField: "watchHistory",
        foreignField: "_id",
        as: "watchHistory",
        pipeline: [
          {
            $lookup: {
              from: "users",
              localField: "owner",
              foreignField: "_id",
              as: "owner",
              pipeline: [
                {
                  $project: {
                    fullName: 1,
                    username: 1,
                    avatar: 1,
                  },
                },
              ],
            },
          },
          {
            $project: {
              // ya wali pipline add ky h woner field ko overwrite kr k us mn say direct object frontend ko bhejnay k leay nahe to array jay ga or frontend walay ko loop lgana pray ga
              owner: {
                $first: "$owner",
              },
            },
          },
        ],
      },
    },
  ]);
  return res
  .status(200)
  .json(new ApiResponse( 200, user[0].watchHistory, "WatchHistory Fetched successfully"))

});

export {
  ragisterUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentUser,
  apdateAcountDetails,
  apdateUserAvatar,
  apdateUserCoverImage,
  getUserChennleProfile,
  getWatvchHistory
};
