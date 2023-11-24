import { IUser, IFullName, IAddress, IOrder } from './user.interface';
import mongoose from 'mongoose';

const fullNameSchema = new mongoose.Schema<IFullName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
  },
});

const addressSchema = new mongoose.Schema<IAddress>({
  street: {
    type: String,
    required: [true, 'Street is required'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
  },
});

const orderSchema = new mongoose.Schema<IOrder>({
  productName: {
    type: String,
    required: [true, 'Product name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
});

const userSchema = new mongoose.Schema<IUser>({
  userId: {
    type: String,
    unique: true,
    required: [true, 'User ID is required'],
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  fullName: {
    type: fullNameSchema,
    return: true,
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  hobbies: {
    type: [String],
    required: [true, 'Hobbies are required'],
    default: [],
  },
  address: {
    type: addressSchema,
    required: [true, 'Address is required'],
  },
  order: {
    type: [orderSchema],
  },
});

export const User = mongoose.model<IUser>('User', userSchema);
