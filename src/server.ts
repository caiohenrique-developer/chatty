import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ message: "É isso ai Caião, vc está mandando muito! ;)" });
});

app.post("/users", (req, res) => {
  return res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
});

app.listen(3333, () => console.log("Server is running on port [3333]! 🖥️"));
