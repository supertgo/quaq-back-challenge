import { Request, Response } from 'express';
import { omit } from 'lodash';
import UserModel from '../models/user.model';

import { createUserInput } from '../schema/user.schema';
import { createUser } from '../service/user.service';

export async function createUserHandler(
  req: Request<{}, {}, createUserInput["body"]>, 
  res: Response
  ) {
  try {
    const user = await createUser(req.body)
    return res.send(user);
  } catch (e: any) {
    console.log(e);
    return res.status(409).send(e.menssage)
  }
}

export async function getUserHandler(req: Request, res: Response){
  const { id } = req.params
  UserModel
    .findById(id)
    .then((data) => res.json(data))
    .catch(() => res.json("Could not get a user with this id"))
}

export async function updateUserHandler(
  req: Request,
  res: Response
) {
  try {
    const { id } = req.params
    const { email, name, password } = req.body
    
    UserModel
      .updateOne({ _id: id}, { $set: { email, name, password}})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }))
  } catch (error) {
    res.json(error)
  }
}

export async function deleteUserHandler(
  req: Request,
  res: Response
) {

  try {
    const { id } = req.params
    UserModel
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error}))
  } catch (error) {
    res.json(error)
  }
  
}