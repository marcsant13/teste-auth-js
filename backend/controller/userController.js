import { findUserByEmail as findUserByEmailService, registerUser as registerUserService } from "../service/userService.js";

export async function registerUser(req, res) {

    try{

        const { email, senha } = req.body;

        const userSave = await registerUserService(email, senha);

        return res.status(200).json(userSave);

    } catch(error){

        console.log(error);

        return res.status(400).json({
            mensagem: error.message
        });

    }

}

export async function loginUser(req, res) {

    try{

        const {email, senha} = req.body;

        const user = await findUserByEmailService(email, senha);

        return res.status(200).json(user);

    } catch(error){

        console.log(error);

        return res.status(401).json({
            mensagem: error.message
        });

    }

}