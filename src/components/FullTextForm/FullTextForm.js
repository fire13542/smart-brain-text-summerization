import React from 'react';
import './FullTextForm.css';

const FullTextForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will summerize the articles you want. Git it a try.'}
      </p>
      <div className='center'>
        <div className='form center pa4 br3 shadow-5'>
          <textarea rows="10" className='f4 pa2 w-70 center' onChange={onInputChange}></textarea>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
          >Summerize</button>
        </div>
      </div>
    </div>
  );
}

export default FullTextForm;