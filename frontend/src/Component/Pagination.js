import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.scss';



const Pagination = ({ notesPerPage, totalNotes, paginates }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
                  <Link onClick={() => paginates(number)} to='/' className='page-link'>
                    { number }
                  </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;