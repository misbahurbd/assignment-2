import { IUser } from './user.interface';
import { User } from './user.model';
import userValidationSchema from './user.validation';

const createUser = async (userData: IUser): Promise<IUser> => {
  const validateData = userValidationSchema.parse(userData);
  const result = await User.create(validateData);
  return result;
};

const getUsers = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};

export const userServices = {
  createUser,
  getUsers,
};
