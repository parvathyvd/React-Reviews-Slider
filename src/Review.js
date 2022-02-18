import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const checkNumber  = (number) => {
    if(number > people.length - 1){
      return 0;
    }
    if(number < 0) {
      return people.length - 1;
    }
    return number;
  }
  
  const prevPerson = () => {
    console.log('clicked');
    let ind = index - 1;
    setIndex(checkNumber(ind));
  }

  const nextPerson = () => {
    console.log('next');
    let ind = index + 1;
    setIndex(checkNumber(ind));
  }

  const randomPerson = () => {
      console.log('random');
      const randomNumber = Math.floor(Math.random()*4);
      console.log(randomNumber);
      setIndex(randomNumber);
      if(index === randomNumber){
        let ind = index + 1;
        setIndex(checkNumber(ind))
      }
  }

  return (
    <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
            <span className='quote-icon'>
              <FaQuoteRight />
            </span>
        </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
          <div className='button-container'>
            <button className='prev-btn'>
              <FaChevronLeft onClick={prevPerson} />
            </button>
            <button className='next-btn'>
              <FaChevronRight onClick={nextPerson} />
            </button>
          </div>
          <button className='random-btn' onClick={randomPerson}>
            surprise me
          </button>
      </article>
  )
};

export default Review;
