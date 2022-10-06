import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2398526",
  database: "test",
});

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("하잉 여기는 백엔드")
})

app.get('/books', (req, res) => {
  const q = "SELECT * FROM test.books"
  db.query(q, (err, data) => {
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.post('/books', (req, res) => {
  const q = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)"
  const values = [req.body.title, req.body.desc, req.body.price, req.body.cover]

  db.query(q, [values], (err, data) => {
    if(err) return res.json(err)
    return res.json("성공적으로 책을 생성했습니다")
  })
})

app.delete('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?"

  db.query(q, [bookId], (err, data) => {
    if(err) return res.json(err)
    return res.json("성공적으로 책을 삭제했습니다")
  })
})

app.put('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `title` = ?, `desc` = ?, `price` = ?, `cover` = ? WHERE id = ?"

  const values = [req.body.title, req.body.desc, req.body.price, req.body.cover]


  db.query(q, [...values,bookId], (err, data) => {
    if(err) return res.json(err)
    return res.json("성공적으로 책 정보를 수정했습니다")
  })
})

app.listen(8800, () => {
  console.log("백엔드 연결 완료!!");
});
