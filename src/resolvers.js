const User = require("./User");

module.exports = {
 Query: {
  users: () => User.find(),
  user: (root, {
   id
  }) => User.findById(id)
 },

 Mutation: {
  createUser: (root, {
   name,
   email
  }) => User.create({
   name,
   email
  }),
  
 },
 
};


//Array estatico para testar
/*
const users = [{
    id: 1,
    name: "Thiago",
    email: "tgmarinho@gmail.com"
   },
   {
    id: 2,
    name: "Diego",
    email: "diego@rocketseat.com"
   }
  ];
*/