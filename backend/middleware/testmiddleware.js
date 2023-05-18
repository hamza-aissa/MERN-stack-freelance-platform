const express = require("express");

const testmiddleware = (req, res, next) => {
  console.log(`body before parsing:${req.body}`);
  next();
};

module.exports = testmiddleware;
