const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json())



const port = 5000;

// const port = process.env.PORT || 3000;
// 4 digit er jekono number

// const handler = (req, res) => {
//     res.send("Hello from my 1st Node.");
// }
// app.get('/', handler);

// 5% hobe next soho
// app.get("/", (req, res,next) => {
//   res.send("Hello from my 1st Node.");
// });

// 95% hobe next chara
app.get("/", (req, res) => {
  res.send(
    "Hello from my 1st Node.I am exited to learn node & express with nodemon automatic restart."
  );
});

// app.get("/users", (req, res,next) => {
//   res.send("Hello from my 1st Node, i got users.");
// });

// app.get("/users", (req, res, next) => {
//   res.send({
//     id: 0,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     city: "Gwenborough",
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: "Romaguera-Crona",
//   });
// });

const users = [
  {
    id: 0,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    city: "Gwenborough",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: "Romaguera-Crona",
  },
  {
    id: 1,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    city: "Wisokyburgh",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: "Deckow-Crist",
  },
  {
    id: 2,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    city: "McKenziehaven",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: "Romaguera-Jacobson",
  },
  {
    id: 3,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    city: "South Elvis",
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: "Robel-Corkery",
  },
  {
    id: 4,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    city: "Roscoeview",
    phone: "(254)954-1289",
    website: "demarco.info",
    company: "Keebler LLC",
  },
];

app.get("/users", (req, res, next) => {
//   console.log(req.query.search);
  
  // search qqery parameter
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
    res.send(searchResult);
  }
  else {
    res.send(users);
  }
});

// app.method
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);


  console.log('hitting post', req.body);

  // both same
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
})

// dynamic api
app.get("/users/:id", (req, res, next) => {
  // console.log(req.params.id);
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});


app.get("/fruits", (req, res) => {
  res.send(["mango", "oranges", "banana", "apple"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Yummy Yummy tok marka fazli");
});

// app.listen(port);

app.listen(port, () => {
  console.log("listenning to port", port);
});
