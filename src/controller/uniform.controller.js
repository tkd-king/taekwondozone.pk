import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Uniform } from "../models/uniform.models.js";


const CreateUniformObject = asyncHandler(async (req, res) => {
  let newUniform ;
  try {
    const {
      company,
      size,
      category,
      upperColor,
      trowserColor,
      seneiority,
      style,
      uniformNumberFormat,
      neckStyle,
      poomseOrNot,
    } = req.body;
    let imageUrl="";
    if (req.file) {
        imageUrl = req.file.path;
    console.log("line::27",imageUrl);
    }
    console.log("line::27",imageUrl);
    
    const uniforms = await Uniform.findOne({ uniformNumberFormat: uniformNumberFormat }); // check if product already exists
    if( uniforms ){
      return res.status(400).json(new ApiError(400, "This Product Already Exists !"))
    }

       newUniform = new Uniform({
        company,
        size,
        category,
        imageUrl,
        upperColor,
        trowserColor,
        seneiority,
        style,
        uniformNumberFormat,
        neckStyle,
        poomseOrNot,
        //add all keys of object here... agter enter in modle
      });
      await newUniform.save();
    console.log("New Uniform :: here... ", newUniform);
    console.log("line::54", company, size, category, upperColor, trowserColor, seneiority, imageUrl, style, uniformNumberFormat, neckStyle, poomseOrNot);
    return res
    .status(201)
    .json(new ApiResponse(200, newUniform, "uniform created successfully"));
    
  } catch (error) {
    console.error("Error while creating uniform:", error);
    throw new ApiError(400, "Please fill in valid inputs for uniform creation");
  }
});
const getAllUniforms = asyncHandler(async (req, res) => {
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
    const totalUniforms = await Uniform.countDocuments(filter); // Total number of filtered items
    const uniforms = await Uniform.find(filter).skip(skip).limit(limit); // Fetch filtered, paginated data

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
const findOneUniform = asyncHandler(async (req, res) => {
  try {
    const uniform = await Uniform.findById(req.params.id);
    return res
      .status(200)
      .json(new ApiResponse(201, uniform, "One Uniform find successfully "));
  } catch (error) {
    throw new ApiError(404, "not uniform found like this /:id");
  }
});
const updatedUniform = asyncHandler(async (req, res) => {
  try {
    const uniformId = req.params.id;
    const updatedData = {
      name: req.body.name,
      company: req.body.company,
      size: req.body.size,
      category: req.body.category,
      upperColor: req.body.upperColor,
      trowserColor: req.body.trowserColor,
      seneiority: req.body.seneiority,
      style: req.body.style,
      neckStyle: req.body.neckStyle,
      poomseOrNot: req.body.poomseOrNot,
      uniformNumberFormat: req.body.uniformNumberFormat,
      //all keys enter here... after declare keys in object modle
      imageUrl: req.file ? req.file.path : req.body.imageUrl, // Handle image update
    };

    // console.log('Update request received for ID:', uniformId);
    // console.log('Update data:', updatedData);

    // Validate if uniform exists before updating
    const uniform = await Uniform.findById(uniformId);
    if (!uniform) {
      throw new ApiError(400, "Uniform not found");
    }

    // Update the uniform with the new data
    const updatedUniform = await Uniform.findByIdAndUpdate(
      uniformId,
      updatedData,
      { new: true, runValidators: true }
    );

    res.status(200).send(updatedUniform);
  } catch (error) {
    console.error("Error updating uniform:", error);
    res.status(500).send({ error: "Error updating uniform" });
  }
});
const deleteUniform = asyncHandler(async (req, res) => {
  try {
    await Uniform.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json(new ApiResponse(201, {}, "Deleted Uniform successfully :)"));
  } catch (error) {
    return res
      .status(404)
      .json(new ApiError(404, "uniform object byId not found"));
  }
});
const soldUniforms = asyncHandler(async(req, res) => {
 const {productId} = req.body
 console.log("product id:",productId);
 
  try {
   const { productId } = req.body;
   console.log("try block product id:",productId);
   
   const uniform = await Uniform.findById(productId);
   console.log("try block uniform:",uniform);
   
   if (!uniform) {
    return res.status(404).json({ error: "Uniform not found" });
  }
 let soldUniform = new Uniform({
    company:uniform.company,
    size:uniform.size,
    category:uniform.category,
    imageUrl:uniform.imageUrl,
    upperColor:uniform.upperColor,
    trowserColor:uniform.trowserColor,
    seneiority:uniform.seneiority,
    style:uniform.style,
    uniformNumberFormat:uniform.uniformNumberFormat,
    neckStyle:uniform.neckStyle,
    poomseOrNot:uniform.poomseOrNot,
    //add all keys of object here... agter enter in modle
  });
  
  await soldUniform.save();
 console.log("sold uniform here.. line 196 unicont.js",soldUniform);
 
  const deletedItem =  await Uniform.findByIdAndDelete(productId);
console.log("deleted product uniform controllar line 198",deletedItem);

  return res
  .status(200)
  .json(new ApiResponse(200, soldUniform, "uniform created successfully"));


  } catch (error) {
    throw new ApiError(500 ,"please refresh internal error")
  }
})
const lowercaseAllFields = async (_, res) => {
  try {
    const uniforms = await Uniform.find(); // Get all documents from the collection

    for (const uniform of uniforms) {
      // Iterate through each document
      const updatedData = {};
      
      // Iterate over each field in the document
      for (const key in uniform._doc) {
        let one=0 ;
        
        
        if (key === "imageURL") {
          // Skip `imageURL` field
          updatedData[key] = uniform[key];
        } else if (typeof uniform[key] === "string") {
          // Convert string fields to lowercase
          updatedData[key] = uniform[key].toLowerCase();
        } else {
          // Keep non-string fields as is
          updatedData[key] = uniform[key];
        }
        one++;
        // Update the document in the database
        console.log("uniform updated ::",one);
      }
      await Uniform.updateOne({ _id: uniform._id }, { $set: updatedData });
    }
    console.log("All fields updated to lowercase (except imageURL) successfully!");
    return res.status(200).json({ message: "All fields updated to lowercase (except imageURL) successfully!" });

  } catch (error) {
    console.error("Error updating documents:", error.message);
    throw new ApiError(500, "Error updating documents to lowercase");
  }
};

;


export {
  getAllUniforms,
  CreateUniformObject,
  findOneUniform,
  updatedUniform,
  deleteUniform,
  soldUniforms,
  lowercaseAllFields
};
