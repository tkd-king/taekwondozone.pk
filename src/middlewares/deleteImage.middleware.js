import cloudinary from 'cloudinary';
import { Uniform } from "../models/uniform.models.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware to delete image from Cloudinary
const deleteImageMiddleware = asyncHandler(async (req, _, next) => {
    try {
        // Find the uniform by ID to get its image URL
        const uniform = await Uniform.findById(req.params.id);
        
        // If the uniform does not exist, move to the next middleware
        if (!uniform || !uniform.imageUrl) {
            console.log("Uniform not found or no image URL to delete");
            return next(); // Move to next middleware if there's no uniform or image to delete
        }

        // Extract Cloudinary public_id from image URL
        const publicId = `uniforms/${uniform.imageUrl.split('/').pop().split('.')[0]}`;
                 console.log("publick id::",publicId);
 
        // Check if we have a valid publicId
        if (publicId) {
            // Attempt to delete the image from Cloudinary
            const result = await cloudinary.v2.uploader.destroy(publicId);
         console.log("result ::",result);

            if (result.result === 'ok') {
                console.log('Image deleted from Cloudinary successfully.');
            } else {
                console.error('Failed to delete image from Cloudinary:', result);
            }
        }

        // Proceed to next middleware after deletion :)
        next();

    } catch (error) {
        console.error('Error deleting image from Cloudinary:', error);
        next(new ApiError(500, 'Failed to delete image from Cloudinary'));
    }
});

export default deleteImageMiddleware;
// this method future proof 
// yay middleware update method pr bhe kam kr raha h 