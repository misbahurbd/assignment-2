import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

// user routes
router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:userId', userController.getSingleUser);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

// order routes
router.put('/:userId/orders', userController.updateUserOrder);
router.get('/:userId/orders', userController.getUserOrders);
router.get(
  '/:userId/orders/total-price',
  userController.getUserOrderTotalPrice,
);

export const userRouter = router;
