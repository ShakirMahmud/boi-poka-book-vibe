import React from 'react';
import bannerImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-3xl mt-12 mb-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="w-auto lg:m-20 mt-10 rounded-lg shadow-2xl" />
                <div className='lg:m-20 m-10 lg:block flex flex-col'>
                    <h1 className="text-5xl font-bold text-center lg:text-start">Books to freshen up your bookshelf</h1>
                    
                    <button className="btn mt-12 btn-primary bg-[#23BE0A] border-none text-white font-bold">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;