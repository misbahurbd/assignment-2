import { z } from 'zod';

const nameValidationSchema = z.object({
  firstName: z
    .string({ required_error: 'First name is required' })
    .max(20, { message: 'First name can be maximum 20 characters' })
    .trim(),
  lastName: z
    .string({ required_error: 'Last name is required' })
    .max(20, { message: 'Last name can be maximum 20 characters' })
    .trim(),
});

const addressValidationSchema = z.object({
  street: z.string({ required_error: 'Street is required' }).trim(),
  city: z.string({ required_error: 'City is required' }).trim(),
  country: z.string({ required_error: 'Country is required' }).trim(),
});

const orderValidationSchema = z.object({
  productName: z.string({ required_error: 'Product name is required' }).trim(),
  price: z.number({ required_error: 'Price is required' }),
  quantity: z.number({ required_error: 'Quantity is required' }),
});

const userValidationSchema = z.object({
  userId: z.string({ required_error: 'User id is required' }),
  username: z
    .string({ required_error: 'Username is required' })
    .toLowerCase()
    .trim(),
  password: z.string({ required_error: 'Password is required' }),
  fullName: nameValidationSchema,
  age: z.number({ required_error: 'Age is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Invalid email address' })
    .toLowerCase(),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()),
  address: addressValidationSchema,
  order: z.array(orderValidationSchema).optional(),
});

export default userValidationSchema;
