require('dotenv').config();

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')




const pool = require('../database/pool')



const getAll = async (req,res) =>{

    try {
        const users = await pool('users').select('*');
        res.json({ success: true, data: users });
      } catch (error) {
        console.error('Erro ao obter usuários:', error);
        res.status(500).json({ success: false, error: 'Erro ao obter usuários' });
      }

}

const registerUser = async (req,res) =>{
    
    try {
        let { name, email, password } = req.body;
    
        // Check if all required fields are present in the request body
        if (!name || !email || !password) {
          return res.status(400).json({ success: false, error: 'Incomplete data' });
        }

        let hashPassword = await bcrypt.hash(password,10)
        password = hashPassword
        
        

        
    
        // Insert a new user into the database
        await pool('users').insert({ name, email, password });
    
        res.json({ success: true, message: 'User successfully registered' });
      } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ success: false, error: 'Error creating user' });
      }


    

   

}

const login = async (req,res)=>{

    const {email,password} = req.body
    
    if ( !email || !password) {
        return res.status(400).json({ success: false, error: 'Incomplete data' });}

        try {
            const user = await pool('users').select('password').where({ email }).first();
            const userIsTrue = await bcrypt.compare(password,user.password)
                     

            

            if(userIsTrue){
                const token = jwt.sign({user}, process.env.JWT_SECRET,{expiresIn:'1h'})
                return res.status(200).json({ success: true, msg: 'Authorized ', token });
                 
            }
            else{
                return res.status(400).json({ success: false, msg: 'Unauthorized' });

            }

            

            

        } catch (error) {
            
        }
        

}

module.exports = {getAll,registerUser, login}