import jwt from 'jsonwebtoken';
import secret_key from '../utils/keys.js';

export function generateToken(userSave) {

    const token = jwt.sign(
        {id: userSave.id, email: userSave.email},
        secret_key,
        {expiresIn: "1h"}
    );

    return token;

}

export function validateToken(token){
    try{
        
        const decode = jwt.verify(token, secret_key);

        return {
            validado: true,
            data: decode
        }

    } catch (error){

        return {
            validado: false,
            erro: error.message
        }

    }
}
