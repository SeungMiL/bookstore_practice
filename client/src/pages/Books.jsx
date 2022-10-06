import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";


const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data)
            } catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    }, [])
  return (
    <div>
        <h1>SM Book Shop</h1>
        <div className="books">
            {books.map(x => (
                <div className="book" key={x.id}>
                    {x.cover && <img src={x.cover} alt=''/>}
                    <h2>{x.title}</h2>
                    <p>{x.desc}</p>
                    <span>{x.price}</span>
                </div>
            ))}
        </div>
        <button><Link to="/add">책 추가하기</Link></button>
    </div>
  )
}

export default Books