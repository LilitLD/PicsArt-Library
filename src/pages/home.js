import React from 'react'
import './home.css'
import image from '../assets/bacground.jpg'
// import MySlider from './slide'
import { Link } from 'react-router-dom'
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import { useState, useEffect } from 'react'
// import { NavLink } from 'react-router-dom'



export default function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3003/book/allbooks", {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                return response.json()
            })
            .then((books) => {
                setBooks(books);
                console.log(books);
            }).catch((e) => {
                console.log(e)
            })
    }, [])
    console.log(books);

    let mainBook = books.slice(0, 3);
    // console.log(mainBook);

    return (<>
        {/* <Header /> */}
        <div className="body">
            <div className="OurLib">
                <span>Our Library <br /></span>
                <span>Collection of Books</span>
            </div>
            <div className='main'>
                {mainBook.map((item, index) => {
                    return (
                        < div id="books" key={index}>
                            <Link to={`/${item.isbn}`} >
                                <img src={image} alt="" />
                            </Link>
                            <div className="product-info">
                                <h2>{item.title}</h2>
                                <p>{item.authors[0]}</p>
                            </div>
                        </div>)

                })}
            <div className="ViewAll">
                <button ><Link to='/catalog'>View All</Link></button>
            </div>
            </div>
            
            <div className='slide'>
                {/* <MySlider /> */}
            </div>

        </div >
        <Footer />
    </>
    )
}