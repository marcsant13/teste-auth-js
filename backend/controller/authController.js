import { validateToken } from "../service/jwtService.js";

export async function authenticateToken(req, res, next) {
    
    const authHeader = req.headers["authorization"];
    //const token1 = authHeader.substring(7, authHeader.length);
    const token = authHeader && authHeader.split(' ')[1];

    const resultToken = validateToken(token);

    if (!resultToken.validado) {
        return res.status(403).json({ mensagem: "Token inválido ou expirado" });
    }

    next();

}