/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { userServices } from './user.service';

// create new user
const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await userServices.createUser(userData);

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Unable to create user',
      error: err,
    });
    console.log(err);
  }
};

// get all users
const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUsers();

    // send success response
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Unable to fetch user',
      error: err,
    });
    console.log(err);
  }
};

// get single user by user Id
const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.getSingleUser(userId);

    // send error if user does not exist
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    // send success response
    res.status(200).json({
      success: true,
      message: 'User fetched successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Unable to create user',
      error: err,
    });
    console.log(err);
  }
};

// update user
const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const userData = req.body;
    const result = await userServices.updateUser(userId, userData);

    // send error if user does not exist
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    // send success response
    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Unable to update user',
      error: err,
    });
    console.log(err);
  }
};

// delete user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.deleteUser(userId);
    console.log({ result });

    // send error if user does not exist
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    // send success response
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Unable to create user',
      error: err,
    });
    console.log(err);
  }
};

// create new order
const updateUserOrder = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const orderData = req.body;
    const result = await userServices.updateUserOrder(userId, orderData);

    // send error if user does not exist
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    // send success response
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Unable to create user',
      error: err,
    });
    console.log(err);
  }
};

// get all orders of user
const getUserOrders = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.getUserOrders(userId);

    // send error if user does not exist
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    // send success response
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Unable to create user',
      error: err,
    });
    console.log(err);
  }
};

// get user order total price
const getUserOrderTotalPrice = async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.userId);
    const result = await userServices.getUserOrderTotalPrice(userId);

    // send error if user does not exist
    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    // send success response
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Unable to calculate order',
      error: err,
    });
    console.log(err);
  }
};

export const userController = {
  createUser,
  getUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  updateUserOrder,
  getUserOrders,
  getUserOrderTotalPrice,
};
