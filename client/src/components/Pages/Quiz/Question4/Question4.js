import React from 'react';

const Question4 = ({ question }) => {
  const answerBtnClicked = (e) => {
    console.log(e.target.innerText)
  }
  return (
    <div className={'questionDIV'}>
      <h1 className={'title'}>{question[3].title}</h1>
      <div className='topQuestions'>
        <button onClick={answerBtnClicked} className={'button'}>
          <h5>{question[3].choices[0]}</h5>
        </button>
        <button onClick={answerBtnClicked} className={'button'}>
          <h5>{question[3].choices[1]}</h5>
        </button>
      </div>
      <div className='bottomQuestions'>
        <button onClick={answerBtnClicked} className={'button'}>
          <h5>{question[3].choices[2]}</h5>
        </button>
        <button onClick={answerBtnClicked} className={'button'}>
          <h5>{question[3].choices[3]}</h5>
        </button>
      </div>
    </div>
  );
};

export default Question4;
