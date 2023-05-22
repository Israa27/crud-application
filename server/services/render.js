const axios =require('axios')
const { param } = require('../routes/router')
exports.homeRouter=(req,res)=>{
            axios.get('http://localhost:3000/api/users').then((response)=>{
                        res.render("index",{users:response.data})
            }).catch(err=>{res.send(err)})
           
}
exports.addUserRouter=(req,res)=>{
            res.render("add_user")
}
exports.updateUserRouter = (req, res) => {
 
  axios
    .get(`http://localhost:3000/api/users`,{params:{id:req.query.id}})
    .then(function (userdata) {
      console.log(userdata.data);
      res.render("update_user", { user: userdata.data });
    })
    .catch(err => {
      res.send(err);
    });
  };
  
          
          