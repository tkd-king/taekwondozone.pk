import mongoose, { Schema, } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"; 


const userSchema = new Schema(
     {
        username:{
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            unique: true,
            index: true
        },
        email:{
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            unique: true,
        },
        fullName:{
            type: String,
            required: true,
            trim: true,
            index: true
        },
        password:{
            type: String,
            required: [true, "password is required"],
        },
        refreshToken: {
            type: String,
        },
        roll: {
            type: String,
            enum: ["user", "admin"],
        }

     }
     , { timestamps: true });

     userSchema.pre("save",async function (next) {
        if(!this.isModified("password")) return next()
           this.password = await bcrypt.hash(this.password, 10)
           next()
           })

           userSchema.methods.isPasswordCorrect = async function (password) {
          return await  bcrypt.compare(password ,this.password)
           }
    
           userSchema.methods.generateAccessToken = function(){
            return jwt.sign(
                {
                    _id:this._id,
                    email:this.email,
                    username:this.username,
                    fullName:this.fullName
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn:process.env.ACCESS_TOKEN_EXPIRY,
                }
            )
           }
           userSchema.methods.generateRefreshToken = function(){
            return jwt.sign(// mera bahut time zaya hoa function likha or return nahe kia hlak mn janta ho k {} k andar returs lazmy h but aj bholnay ky waja say mn nay bahut time zaya kia
                {
                    _id:this._id
                },
                process.env.REFRESH_TOKEN_SECRET,
                {
                    expiresIn:process.env.REFRESH_TOKEN_EXPIRY,
                }
                
            )
           }




export  const User = mongoose.model("User", userSchema);
