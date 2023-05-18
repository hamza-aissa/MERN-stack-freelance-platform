// const Player = require("../models/PlayerModel");
// const mongoose = require("mongoose");

// //  player CRUD
// const getallUsers = async (req, res) => {
//   try {
//     const result = await Player.find({});
//     return res.status(200).send(result);
//   } catch (error) {
//     console.log(err);
//     return res.status(500).send(err);
//   }
// };
// const getUserByname = async (req, res) => {
//   const { username } = req.body;

//   try {
//     const result = await Player.findOne({ username: username }, "-password");
//     res.send(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const updateUserinfos = async (req, res) => {
//   const { id } = req.params;
//   const { username, email, password, role } = req.body;

//   try {
//     const result = await Player.findByIdAndUpdate(
//       id,
//       {
//         username,
//         email,
//         password,
//         role,
//       },
//       { new: true }
//     );
//     console.log(`player ${result.username} updated`);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };
// const deleteUser = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await Player.findByIdAndRemove({ _id: id });
//     res.status(200).send({ message: `player ${result.username} deleted` });
//   } catch (error) {
//     res.status(400).send({ message: "player already deleted" });
//   }
// };

// module.exports = {
//   getallUsers,
//   getUserByname,
//   updateUserinfos,
//   deleteUser,
// };
