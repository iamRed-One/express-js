import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, userName: "ridwan", displayName: "Ridwan" },
  { id: 2, userName: "sodiq", displayName: "Sodiq" },
  { id: 3, userName: "bukky", displayName: "Bukky" },
];

// To start a server
app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

app.get("/", (request, response) => {
  response.status(201).send({ msg: "Hello!" });
});

app.get("/api/users", (request, response) => {
  response.send(mockUsers);
});

// Understanding how to use route parameters
app.get("/api/users/:id", (request, response) => {
  console.log(request.params);
  const parsedId = parseInt(request.params.id);
  console.log(parsedId);

  if (isNaN(parsedId)) {
    return response.status(400).send({ msg: "Bad Request. Invalid ID." });
  }

  const findUser = mockUsers.find((user) => user.id === parsedId);
  if (!findUser) return response.status(404).send("No User with this ID.");
  return response.send(findUser);
});

app.get("/api/products", (request, response) => {
  response.send([{ id: 123, name: "bags", price: 12.99 }]);
});
