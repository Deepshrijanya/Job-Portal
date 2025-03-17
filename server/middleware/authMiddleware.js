// To authenticate the company and fetch company id using this middleware

import jwt from 'jsonwebtoken';
import Company from '../models/Company.js';

export const protectCompany = async (req, res, next) => {

    const token = req.headers.token

    if(!token) {
        return res.json({success: false, message: "Not authorized, Login Again"})
    }

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET) //in generateToken.js company id is stored in jwt as payload data

        req.company = await Company.findById(decoded.id).select('-password') //the select method will remove the password property from the data

        next()

    } catch (error) {
        res.json({success: false, message: error.message})
    }

}