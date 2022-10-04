import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2398526",
  database: "test",
});

app.get("/", (req, res) => {
    res.json("하잉 여기는 백엔드")
})

app.listen(8800, () => {
  console.log("백엔드 연결 완료!!");
});
