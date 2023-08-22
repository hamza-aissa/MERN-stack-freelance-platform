const { User } = require("../models/UserModel");
const { Todo } = require("../models/UserModel");
const { Notification } = require("../models/UserModel");
const mongoose = require("mongoose");
// user Features
const searchUsers = async (req, res) => {
  console.log("search users called");

  const { searchTerm } = req.params;

  try {
    const result = await User.find({
      email: { $regex: searchTerm, $options: "i" },
    });
    console.log(result);
    res.status(200).json(result || []);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Something went wrong" });
  }
};
const Sendmessage = async (req, res) => {
  // send message to other user
};
const checkFollowState = async (req, res) => {
  try {
    const userId = req.params.userId;
    const targetId = req.params.targetId;

    const user = await User.findOne({ email: userId });
    const target = await User.findOne({ email: targetId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isFollowing = user.Following.includes(target._id);
    return res.status(200).json({ isFollowing });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
const FollowUser = async (req, res) => {
  try {
    console.log("targetID from body" + req.body.TargetId);
    console.log("targetID from params" + req.params.TargetId);
    const TargetId = await User.findOne({ email: req.body.TargetId });
    console.log("targetID" + TargetId);
    const user = await User.findOne({ _id: req.user });
    console.log("user" + user);

    if (user.Following.includes(TargetId._id)) {
      return res
        .status(400)
        .json({ message: "You are already following this user" });
    }
    user.Following.push(TargetId._id);
    TargetId.Followers.push(user._id);
    await user.save();
    await TargetId.save();
    const notification = {
      user: TargetId._id,
      type: "follow",
      message: "You are now following " + user.email,
      time: new Date(),
    };
    await Notification.create(notification);
    return res
      .status(200)
      .json({ message: "You are now following " + TargetId.email });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
//  User CRUD
const getallUsers = async (req, res) => {
  try {
    const result = await User.find({});
    return res.status(200).send(result);
  } catch (error) {
    console.log(err);
    return res.status(500).send(err);
  }
};
const getUserByname = async (req, res) => {
  const { email } = req.body;

  try {
    const result = await User.findOne({ email: email }, "-password");
    res.send(result);
  } catch (error) {
    console.error(error);
  }
};
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Player.findByIdAndRemove({ _id: id });
    res.status(200).send({ message: `player ${result.username} deleted` });
  } catch (error) {
    res.status(400).send({ message: "player already deleted" });
  }
};

module.exports = {
  checkFollowState,
  getallUsers,
  getUserByname,
  deleteUser,
  FollowUser,
  searchUsers,
};
