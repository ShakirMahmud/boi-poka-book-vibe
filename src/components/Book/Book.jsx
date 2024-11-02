import { AiOutlineStar } from "react-icons/ai";
import React from 'react';
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const {bookId, image, bookName, author, tags, rating, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
                <figure className='bg-[#F3F3F3] py-8 rounded-2xl'>
                    <img
                        src={image}
                        alt={bookName}
                        className='h-[166px]'
                    />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-4'>
                        {
                            tags.map((tag, idx) => <button
                            key={idx} className="btn bg-green-100 text-green-900 btn-xs">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border-t-2 border-dashed mt-4"></div>
                    <div className="card-actions justify-between mt-4">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <span className="mr-2"> </span>  <AiOutlineStar /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};


export default Book;