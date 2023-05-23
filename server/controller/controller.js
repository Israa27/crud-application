const Userdb=require('../model/model')

//create naw user

exports.create = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({ message: 'Body cannot be empty!' });
      return;
  }
          
// Create a new user
  const user = new Userdb({
     name: req.body.name,
     email: req.body.email,
     gender: req.body.gender,
     status: req.body.status,
  });
          
// Save the user in the database
user.save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || 'Something happened while creating a new account' });
    });
};
          
//retrieve and return all users or retrieve and return single user

exports.find = (req, res) => {
  if(req.query.id){
    const id = req.query.id;

    Userdb.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({ message : "Not found user with id "+ id})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message: "Erro retrieving user with id " + id})
        })

}else{
    Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
        })
}


}

//update information of user by user id


exports.update = (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ message: "Data to update cannot be empty" });
  }

const id = req.params.id;
Userdb.findByIdAndUpdate(id, req.body, { new: true })
  .then(data => {
    if (!data) {
      return res.status(404).send({ message: `Cannot update user with ID ${id}. User not found!` });
    }
    return res.send({ data });
  })
  .catch(err => {
    res.status(500).send({ message: "Error updating user information" });
  });
};



// Delete information of user by user ID
exports.delete = (req, res) => {
  const id = req.params.id;
  Userdb.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({ message: "Can't delete with ID. Maybe the ID is wrong." });
      } else {
        res.send({ message: "User has been deleted successfully!" });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message || 'Error deleting user information' });
    });
};
