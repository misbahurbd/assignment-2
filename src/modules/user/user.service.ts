import { IOrder, IUser } from './user.interface';
import { User } from './user.model';
import { userValidationSchema, orderValidationSchema } from './user.validation';

// create new user
const createUser = async (userData: IUser): Promise<IUser> => {
  const validateData = userValidationSchema.parse(userData);
  if (await User.isUserExist(validateData)) {
    throw new Error('User already exist');
  } else {
    const result = await User.create(validateData);
    return result;
  }
};

// get all user
const getUsers = async (): Promise<IUser[]> => {
  const result = await User.find();
  return result;
};

// get single user by userId
const getSingleUser = async (userId: number): Promise<IUser | null> => {
  const result = await User.getUserByUserId(userId);
  return result;
};

// update user
const updateUser = async (
  userId: number,
  userData: IUser,
): Promise<IUser | null> => {
  const result = await User.findOneAndUpdate({ userId }, userData);
  return result;
};

// delete user
const deleteUser = async (userId: number): Promise<IUser | null> => {
  const result = await User.findOneAndDelete({ userId });
  return result;
};

// update user order
const updateUserOrder = async (
  userId: number,
  orderData: IOrder,
): Promise<IUser | null> => {
  const validateData = orderValidationSchema.parse(orderData);
  const result = await User.updateOrder(userId, validateData);
  return result;
};

// get all orders of user
const getUserOrders = async (userId: number) => {
  const result = await User.findOne({ userId }).select({ orders: 1 });
  return result;
};

// get user order total price
const getUserOrderTotalPrice = async (userId: number) => {
  const user = await User.getUserByUserId(userId);
  if (!user) {
    return null;
  }

  if (!user.orders || user.orders.length === 0) {
    return { totalPrice: 0 };
  }

  const result = await User.aggregate([
    {
      $match: {
        userId,
      },
    },
    {
      $unwind: '$orders',
    },
    {
      $group: {
        _id: null,
        totalPrice: {
          $sum: {
            $multiply: ['$orders.quantity', '$orders.price'],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalPrice: 1,
      },
    },
  ]).exec();

  return result[0];
};

export const userServices = {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  updateUserOrder,
  getUserOrders,
  getUserOrderTotalPrice,
};
