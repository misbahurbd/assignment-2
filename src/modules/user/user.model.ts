import { IUser, IFullName, IAddress, IOrder } from './user.interface';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// define full name schema
const fullNameSchema = new mongoose.Schema<IFullName>(
  {
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
  },
  { _id: false },
);

// define address schema
const addressSchema = new mongoose.Schema<IAddress>(
  {
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
  },
  { _id: false },
);

// define order schema
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

// define user Schema
const userSchema = new mongoose.Schema<IUser>(
  {
    userId: {
      type: Number,
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
      default: undefined,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  },
);

// hashed user password
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// handle all user middleware request
userSchema.pre('find', function (next) {
  this.find().projection({
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    address: 1,
  });
  next();
});

// handle single user middleware request
userSchema.pre('findOne', function (next) {
  this.findOne().projection({
    userId: 1,
    username: 1,
    fullName: 1,
    age: 1,
    email: 1,
    isActive: 1,
    hobbies: 1,
    address: 1,
  });
  next();
});

export const User = mongoose.model<IUser>('User', userSchema);
