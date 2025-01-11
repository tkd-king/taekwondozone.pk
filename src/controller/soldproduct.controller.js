import { soldUniforms } from "./uniform.controller";



const getAllSoldUniforms = asyncHandler(async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; // Current page (default: 1)
      const limit = parseInt(req.query.limit) || 10; // Items per page (default: 10)
      const skip = (page - 1) * limit; // Calculate the number of items to skip
      // Filters from query parameters
      const {
        company,
        size,
        upperColor,
        trowserColor,
        seneiority,
        category,
        uniformNumberFormat,
        poomseOrNot
      } = req.query;
  
      // Build dynamic filter object
      const filter = {};
      if (company) filter.company = { $regex: company, $options: "i" }; // Case-insensitive search
      if (size) filter.size = size;
      if (upperColor) filter.upperColor = upperColor;
      if (trowserColor) filter.trowserColor = trowserColor;
      if (seneiority) filter.seneiority = seneiority;
      if (category) filter.category = category
      if (uniformNumberFormat) filter.uniformNumberFormat = uniformNumberFormat;
      if (poomseOrNot) filter.poomseOrNot = poomseOrNot;
  
      // Apply filter and pagination
      const totalUniforms = await soldUniforms.countDocuments(filter); // Total number of filtered items
      const uniforms = await soldUniforms.find(filter).skip(skip).limit(limit); // Fetch filtered, paginated data
  
      res.status(200).json({
        uniforms, // Data for the current page
        currentPage: page,
        totalPages: Math.ceil(totalUniforms / limit),
        totalUniforms, // Total number of items
      });
    } catch (error) {
      throw new ApiError(404, "not found any unifom here ...");
    }
  });

  export default {
    getAllSoldUniforms,
  }