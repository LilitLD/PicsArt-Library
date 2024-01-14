import React, { useState, useEffect } from 'react'
import "./catalog.css"
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/7.png";
import image7 from "../assets/8.jpg";
import { Link } from 'react-router-dom';
import Header from "../components/header";
import Footer from "../components/footer";

export default function Catalog() {
  const [keyWord, setKeyWord] = useState('');
  // const [fiterKey, setfiterKey] = useState('');
  const [magicNumber, setMagicNumber] = useState(6);
  const [books, setBooks] = useState([]);
  const [mainBook, setMainBook] = useState(books.slice(0, 6));
  useEffect(() => {
    fetch("http://localhost:3003/book/allbooks", {
      method: 'GET',
      // credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((books) => {
        setBooks(books);
        setMainBook(books.slice(0, 6));
      }).catch((e) => {
        console.log(e);
      })
  }, [])
  // const [mainBook, setMainBook] = useState(books.slice(0, 6));
  useEffect(() => { })
  const handleSearch = (e) => {
    setKeyWord(e.target.value);
    // console.log(e.target.value);
    let filteredArr = books.filter((book) => {
      if (book.title.toLowerCase().includes(keyWord.toLowerCase())) {
        return true;
      } else {
        return false;
      }

    });
    setMainBook(filteredArr);
  };

  const handleMeroeBooks = () => {
    setMagicNumber(prevMagicNumber => prevMagicNumber + 6);
    if (magicNumber >= books.length - 1) {
      setMagicNumber(books.length)
    }
  }

  useEffect(() => {
    setMainBook(books.slice(0, magicNumber));
  }, [magicNumber]);

  const filterKey = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Reset filters") {
      setMainBook(books.slice(0, 6));
      // setMagicNumber(6)
    } else if (e.target.value === "All books") {
      setMagicNumber(books.length - 1);
      setMainBook(books);
    } else {
      let filteredArr = books.filter((book) => {
        if (book.category.includes(e.target.value)) {
          return true;
        } else {
          return false;
        }

      });
      setMainBook(filteredArr);
    }
  }
  //-----------------------------------
console.log(mainBook, books);
  return (
    <>
     {/* <Header /> */}
      <div className='mainCatalog'>
        <div className='search-bar'>
          <form className='form'>
            <div>
              <label htmlFor="search" className='label'></label>
              <input
                type="text"
                id="search"
                // value={keyWord}
                onChange={handleSearch}
                className='input'
                placeholder='Type to search'
              />
            </div>
          </form>
          <div className='forButton'>
            <h4>Filter Options</h4>
            <div><button onClick={filterKey} value={"All books"}>All books</button></div>
            <div><button onClick={filterKey} value={"Fiction"}>Fiction</button></div>
            <div><button onClick={filterKey} value={"Non Fiction"}>Non Fiction</button></div>
            <div><button onClick={filterKey} value={"Biography"}>Biography</button></div>
            <div><button onClick={filterKey} value={"History"}>History</button></div>
          </div>
          <button className='reset-filters' onClick={filterKey} value={"Reset filters"}>Reset filters</button>
        </div>
        <div className='all-books'>
          <div className='main'>
            {mainBook.map((item, index) => {
                console.log("aaaaaa");
              return (
                < div className="books" key={index}>
                  <Link to={`/${item.isbn}`} >
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                    <img src={image6} alt="" />
                    <img src={image7} alt="" />
                  </Link>
                  <div className="product-info">
                    <h2>{item.title}</h2>
                    <p>{item.authors[0]}</p>
                  </div>
                </div>)

            })}
            <div className="ViewAll">
                {/* {keyWord ? <p></p> : <button onClick={handleMeroeBooks}>View More</button>} */}
            <button onClick={handleMeroeBooks}>View More</button>
          </div>
          </div>
          
        </div>
      </div>
      { <Footer />}
    </>
  )
}