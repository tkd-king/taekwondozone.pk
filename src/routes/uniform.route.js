import { Router } from "express";
import upload from '../utils/cloudinory.js';
import { CreateUniformObject, deleteUniform, findOneUniform, getAllUniforms, soldUniforms, updatedUniform } from "../controller/uniform.controller.js";
import deleteImageMiddleware from "../middlewares/deleteImage.middleware.js";

const router = Router()
router.route('/post-uniform').post(upload.single('imageUrl'), CreateUniformObject );
router.route('/find-uniform').get( getAllUniforms );
router.route('/find-one/:id').get( findOneUniform );
router.route('/add-sellProduct').post( soldUniforms );
router.route('/update-one/:id').put( deleteImageMiddleware, upload.single('imageUrl') ,updatedUniform );
router.route('/delete-uniform/:id').delete( deleteImageMiddleware, deleteUniform );


export default router