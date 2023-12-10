const jwt = require('jsonwebtoken')
require('dotenv').config();

const verifymiddleware = async (req,res,next)=>{
    


    const {authorization} = req.headers   
    const token = authorization.split(' ')[1] 

    if(!authorization){
        return res.status(400).json({ success: false, msg: 'Missing Autorization '});
    }

    try {

        let verifica = await jwt.verify(token,process.env.JWT_SECRET)
        
    } catch (error) {
           return res.status(401).json({ success: false, msg: 'Not Allowed' });
    }


    
    
    

    

    next() 

    
}


module.exports = verifymiddleware