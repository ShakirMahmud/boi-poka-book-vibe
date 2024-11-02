import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {

    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    
    const {bookId: currentBookId, image} = book;
    return (
        <div className='my-12'>
            <h2>Book Details: {bookId}</h2>
            <img className='w-40' src={image} alt="" />
            <br />
            <button className="btn btn-outline mr-4  btn-accent">Read</button>
            <button className="btn btn-active btn-accent">WishList</button>
        </div>
    );
};

export default BookDetails;