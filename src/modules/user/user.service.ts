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

const getSingleUser = async (userId: number): Promise<IUser | null> => {
  const result = await User.getUserByUserId(userId);
  return result;
};

const updateUser = async (
  userId: number,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ userId }, userData);
  return result;
};

const deleteUser = async (userId: number): Promise<IUser | null> => {
  const result = await User.findOneAndDelete({ userId });
  return result;
};

export const userServices = {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
