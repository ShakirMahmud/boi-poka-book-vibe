import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../utility/addToDb';

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book=> storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
    },[])
    useEffect(()=>{
        const storedReadList = getStoredWishList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book=> storedReadListInt.includes(book.bookId));
        setWishList(readBookList);
    },[])
    return (
        <div className='my-12'>
            <h3>Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I Read: {readList.length}</h2>
                    {
                        readList.map(book => (
                            <div key={book.bookId} className='border-2 border-gray-400 p-4'>
                                <h4 className='text-3xl'>{book.bookName}</h4>
                                <img className='w-40' src={book.image} alt="" />
                            </div>
                        ))
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl'>My Wish List: {wishList.length}</h2>
                    {
                        wishList.map(book => (
                            <div key={book.bookId} className='border-2 border-gray-400 p-4'>
                                <h4 className='text-3xl'>{book.bookName}</h4>
                                <img className='w-40' src={book.image} alt="" />
                            </div>
                        ))
                    }

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;