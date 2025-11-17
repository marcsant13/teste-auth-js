import express from 'express';
import { loginUser as loginUserController, registerUser as registerUserController } from '../controller/userController.js';
import { authenticateToken } from '../controller/authController.js';

const routes = express.Router();

routes.post("/cadastrar", registerUserController);

routes.post("/login", loginUserController);

routes.get("/teste", authenticateToken, (req, res) => {
    res.status(200).json({
        mensagem: "rota liberada"
    });
})

export default routes;