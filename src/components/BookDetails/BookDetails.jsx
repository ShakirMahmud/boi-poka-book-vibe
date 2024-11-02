import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStoredWishList } from '../utility/addToDb';

const BookDetails = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);

    const { bookId: currentBookId, image, bookName, author, tags, rating, category, review } = book;

    const handleMarkAsRead = (id) => {
        addToStoredReadList(id);
    }
    const handleAddToWhishList = id => {
        addToStoredWishList(id);
    }

    return (
        <div className='my-12'>
            <div className='flex lg:flex-row flex-col gap-10 justify- between'>
                <div className='w-4/5'>
                    <img className='w-40' src={image} alt="" />
                </div>
                <div className='flex flex-col space-y-4 w-auto'>
                    <h2 className='text-4xl'>{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="border-t-2 border-dashed mt-4"></div>
                    <p>{category}</p>
                    <div className="border-t-2 border-dashed mt-4"></div>
                    <p className=''>{review}</p>
                    <div className=''>
                        {
                            tags.map((tag, idx) => <button
                                key={idx} className="btn mr-4 bg-green-100 text-green-900 btn-xs">{tag}</button>)
                        }
                    </div>
                    <div>
                        <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-4  btn-accent">Mark as Read</button>
                        <button onClick={() => handleAddToWhishList(bookId)} className="btn btn-active btn-accent">Add to WishList</button>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};

export default BookDetails;