import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import jwt from "jsonwebtoken";

export const newUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username: username } });

    if (user) {
      return res.status(409).json({
        msg: `Ya existe un usuario con el nombre: ${username}`,
      });
    }
  } catch (error) {
    return res.status(400).json({
      msg: "Ocurrio un error",
      error,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      username: username,
      password: hashedPassword,
    });

    res.status(201).json({
      msg: `Usuario ${username} creado exitosamente`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Ocurrio un error",
      error,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user: any = await User.findOne({ where: { username: username } });

  if (!user) {
    return res.status(404).json({
      msg: `Usuario inexistente: ${username}`,
    });
  }

  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid) {
    return res.status(403).json({
      msg: "Password incorrecto",
    });
  }

  const token = jwt.sign(
    {
      username: username,
    },
    process.env.SECRET_KEY || "llavesecreta",
    {
      expiresIn: "3600000",
    }
  );

  res.json(token);
};
