import React from 'react';
import './TextSummerization.css';

const TextSummerization = ({ summary }) => {
  console.log(summary)
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <textarea rows="10" cols="50" className='f4 pa2 w-100 center' value={summary}></textarea>
      </div>
    </div>
  );
}

export default TextSummerization;