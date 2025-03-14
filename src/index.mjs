import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

// To start a server
app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
