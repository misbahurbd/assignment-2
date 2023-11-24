/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface IFullName {
  firstName: string;
  lastName: string;
}

export interface IAddress {
  street: string;
  city: string;
  country: string;
}

export interface IOrder {
  productName: string;
  price: number;
  quantity: number;
}

export interface IUser {
  userId: number;
  username: string;
  password: string;
  fullName: IFullName;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: IAddress;
  orders?: IOrder[];
}

export interface UserModel extends Model<IUser> {
  getUserByUserId: (userId: number) => Promise<IUser | null>;
  isUserExist: (userData: IUser) => Promise<IUser | null>;
  updateOrder: (userId: number, orderData: IOrder) => Promise<IUser | null>;
}
