import { registerUser as registerUserRepository } from "../repository/userRepository.js";
import { findUserByEmail as findUserByEmailRepository } from "../repository/userRepository.js";
import bcrypt from 'bcrypt';
import { generateToken } from "./jwtService.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const senhaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

export async function registerUser(email, senha) {

    validateEmailAndSenha(email, senha);

    const userByEmail = await findUserByEmailRepository(email);

    if (userByEmail) throw new Error("Usuario ja cadastrado");

    const userSave = await registerUserRepository(email, bcrypt.hashSync(senha, 10));
    
    const token = generateToken(userSave);

    return {
        usuario: {id: userSave.id, email: userSave.email},
        token: token
    };

}

export async function findUserByEmail(email, senha) {

    validateEmailAndSenha(email, senha);

    const user = await findUserByEmailRepository(email);

    if (user === null) throw new Error("Usuario nao cadastrado");

    if (!bcrypt.compareSync(senha, user.senha)) throw new Error("Senha incorreta");

    const token = generateToken(user);

    return {
        usuario: {id: user.id, email: user.email},
        token: token
    };

}

function validateEmailAndSenha(email, senha){

    email = String(email);
    senha = String(senha);

    if (isEmpty(email) || isEmpty(senha)) throw new Error("Preencha os campos corretamente");

    if (!emailRegex.test(email)) throw new Error("Formato de email invalido");

    if (!senhaRegex.test(senha)) throw new Error("Formato de senha invalido");

}

function isEmpty(string){
    return !string || string.trim() === "";
}