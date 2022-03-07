import userModel from "../models/user.js";

const saltRounds = 10;

class signupController {
  signupUser(req, res) {
    let username = req.body.txtUsername;
    let password = req.body.txtPassword;
    let firstName = req.body.txtFirstName;
    let lastName = req.body.txtLastName;
    let contact = req.body.txtContact;
    let address = req.body.txtAddress;
    let avatarUrl = req.body.avatarUrl;
    let gender = req.body.txtGender;

    const url = "mongodb://localhost:27017";
    const client = new MongoClient(url);
    // Database Name
    const dbName = "eCommerceProject";
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("users");

    _hash(password, saltRounds, async function (err, hash) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      try {
        await collection.insertOne({
          username: username,
          password: hash,
          firstName: firstName,
          lastName: lastName,
          contact: contact,
          address: address,
          avatarUrl: avatarUrl,
          gender: gender
        });
        res.send(200, "Successfully Created User");
      } catch (error) {
        res.send(500, `Cannot signup user ${error}`);
      }
    });
  }

  signupCustomer(req, res) {
    let username = req.body.txtUsername;
    let password = req.body.txtPassword;
    let firstName = req.body.txtFirstName;
    let lastName = req.body.txtLastName;
    let contact = req.body.txtContact;
    let avatarUrl = req.body.avatarUrl;
    let gender = req.body.txtGender;

    const url = "mongodb://localhost:27017";
    const client = new MongoClient(url);
    // Database Name
    const dbName = "eCommerceProject";
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("customer");

    _hash(password, saltRounds, async function (err, hash) {
      if (err) {
        res.status(500).send(err);
        return;
      }
      try {
        await collection.insertOne({
          username: username,
          password: hash,
          firstName: firstName,
          lastName: lastName,
          contact: contact,
          address: address,
          avatarUrl: avatarUrl,
          gender: gender
        });
        res.send(200, "Successfully Created User");
      } catch (error) {
        res.send(500, `Cannot signup user ${error}`);
      }
    });
  }
}
export default signupController;
