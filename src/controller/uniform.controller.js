import { asyncHandler } from "../utils/AsyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Uniform } from "../models/uniform.models.js";

 const CreateUniformObject = asyncHandler(async (req, res) => {
    try {
        const { name = '' , company = '' , size = '' , category = 'A'  ,upperColor = 'White' , trowserColor = 'White' , seneiority = 'Pumdown' , style='Full Slieve' } = req.body;
        let imageUrl;  // Cloudinary se upload ke baad ka image URL
       if (req.file ) {
        imageUrl = req.file.path;
        
    }
    
        const newUniform = new Uniform({
            name,
            company,
            size,
            category,
            imageUrl,
            upperColor,
            trowserColor,
            seneiority,
            style,
            //add all keys of object here... agter enter in modle
        });
        console.log("New Uniform :: here... ",newUniform);
        
        await newUniform.save();
    // console.log(name, company, size, category,color,upperColor, trowserColor, seneiority );

        return res.status(201).json(new ApiResponse(200,newUniform,"uniform created successfully"));
    }  catch (error) {
        console.error('Error while creating uniform:', error);
        throw new ApiError(400, "Please fill in valid inputs for uniform creation");
      }
});
const getAllUniforms = asyncHandler( async (req, res) => {
   try {
     const uniforms = await Uniform.find();
     res.status(200).json(uniforms);
   } catch (error) {
    throw new ApiError(404,"not found any unifom here ...")
   }
})
const findOneUniform = asyncHandler(async (req, res) => {
        try {
            const uniform = await Uniform.findById(req.params.id);
            return res.status(200).json(new ApiResponse(201,uniform,"One Uniform find successfully "));
        } catch (error) {
            throw new ApiError(404,"not uniform found like this /:id")
        }
    })
const updatedUniform = asyncHandler( async (req, res) => {
    try {
        const uniformId = req.params.id;
            const updatedData = {
                name: req.body.name,
                company: req.body.company,
                size: req.body.size,
                category: req.body.category,
                color: req.body.color,
                upperColor: req.body.upperColor,
                trowserColor: req.body.trowserColor,
                seneiority: req.body.seneiority,
                style:req.body.style,
                //all keys enter here... after declare keys in object
                imageUrl: req.file ? req.file.path : req.body.imageUrl // Handle image update
            };

        // console.log('Update request received for ID:', uniformId);
        // console.log('Update data:', updatedData);

        // Validate if uniform exists before updating
        const uniform = await Uniform.findById(uniformId);
        if (!uniform) {
            throw new ApiError(400, 'Uniform not found')
        }

        // Update the uniform with the new data
        const updatedUniform = await Uniform.findByIdAndUpdate(uniformId, updatedData, { new: true, runValidators: true });
        
        res.status(200).send(updatedUniform);
    } catch (error) {
        console.error('Error updating uniform:', error);
        res.status(500).send({ error: 'Error updating uniform' });
    }
})
const deleteUniform = asyncHandler(async (req, res) => {
        try {
            await Uniform.findByIdAndDelete(req.params.id);
           return res.status(200).json(new ApiResponse(201,{},"Deleted Uniform successfully :)"));
        } catch (error) {
            return res.status(404).json( new ApiError(404,"uniform object byId not found") )
        }
    })


export {
    getAllUniforms,
    CreateUniformObject,
    findOneUniform,
    updatedUniform,
    deleteUniform
}