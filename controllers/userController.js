const User = require("../models/user");

class UserController {
  static async getAllUsers(req, res) {
    try {
      const data = await User.find()

      res.status(200).json(data)
    } catch (error) {
      console.log(error)
    }
  }

  static async createUser(req, res) {
    try {
      console.log(req.body)
      const { name, email } = req.body
      const data = await User.create({ name, email })

      res.status(201).json(data)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = UserController;