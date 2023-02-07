import { useState } from 'react';

function App() {
  const questions = [
    {
      questionText: 'A person with well-developed abdominal muscles is said to have a what?',
      answerOptions: [
        {answerText:'One-pack', isCorrect: false},
        {answerText:'Six-pack', isCorrect: true},
        {answerText:'Twelve-pack', isCorrect: false},
        {answerText:'Family-pack', isCorrect: false}
      ],
    },
    {
      questionText: 'A magnet would most likely attract which of the following?',
      answerOptions: [
        {answerText:'Metal', isCorrect: true},
        {answerText:'Plastic', isCorrect: false},
        {answerText:'Wood', isCorrect: false},
        {answerText:'Food', isCorrect: false}
      ],
    },
    {
      questionText: 'Which of these names is not in the title of a Shakespeare play?',
      answerOptions: [
        {answerText:'Hamlet', isCorrect: false},
        {answerText:'Romeo', isCorrect: false},
        {answerText:'Macbeth', isCorrect: false},
        {answerText:'Darren', isCorrect: true}
      ],
    },
    {
      questionText: 'If someone asked to see your ID, what might you show them?',
      answerOptions: [
        {answerText:'Tongue', isCorrect: false},
        {answerText:'Teeth', isCorrect: false},
        {answerText:'Passport', isCorrect: true},
        {answerText:'Tattoo', isCorrect: false}
      ],
    },
    {
      questionText: 'When a tree is cut down, the part that remains in the ground is called what?',
      answerOptions: [
        {answerText:'Stump', isCorrect: true},
        {answerText:'Rump', isCorrect: false},
        {answerText:'Hump', isCorrect: false},
        {answerText:'Leftovers', isCorrect: false}
      ],
    },
    {
      questionText: 'To convince you he is truthful, a person is most likely to say he will "swear on a stack of" what?',
      answerOptions: [
        {answerText:'Gold', isCorrect: false},
        {answerText:'Bibles', isCorrect: true},
        {answerText:'Flag', isCorrect: false},
        {answerText:'Pancakes', isCorrect: false}
      ],
    },
    {
      questionText: 'By definition, a 10-speed bike has 10 what?',
      answerOptions: [
        {answerText:'Wheels', isCorrect: false},
        {answerText:'Spokes', isCorrect: false},
        {answerText:'Gears', isCorrect: true},
        {answerText:'Lives', isCorrect: false}
      ],
    },
    {
      questionText: 'According to the proverb, "Early to bed and early to rise" makes you "healthy, wealthy and" what?',
      answerOptions: [
        {answerText:'Boring', isCorrect: false},
        {answerText:'Brave', isCorrect: false},
        {answerText:'Stealthy', isCorrect: false},
        {answerText:'Wise', isCorrect: true}
      ],
    },
    {
      questionText: 'Which plant is a national symbol of Ireland?',
      answerOptions: [
        {answerText:'Rose', isCorrect: false},
        {answerText:'Thistle', isCorrect: false},
        {answerText:'Leek', isCorrect: false},
        {answerText:'Shamrock', isCorrect: true}
      ],
    },
    {
      questionText: 'According to studies, what should a typical teenager spend up to 10 hours a night doing?',
      answerOptions: [
        {answerText:'Partying', isCorrect: false},
        {answerText:'Tweeting', isCorrect: false},
        {answerText:'Surfing', isCorrect: false},
        {answerText:'Sleeping', isCorrect: true}
      ],
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  function handleAnswerClick(isCorrect) {
    if(isCorrect === true) {
      setScore(score + 1)
    }
    const nextQuestion = currentQuestion + 1
    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }else{
      setShowScore(true)
    }
  }
  return (
    <div className='quiz text-wrap border border-secondary bg-light rounded-2 p-5'>
      { showScore ? (
        <div className='score-section text-center'>
          You scored {score} out of {questions.length} questions.
        </div>) : (
          <>
            <div div className='question-section'>
              <div className='question-count h6 mb-3'>
                <span>Question {currentQuestion + 1}/{questions.length}</span>
              </div>
              <div className='question-text'>{questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer-section d-flex flex-column gap-2'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button className='text-nowrap btn btn-secondary' onClick={() => handleAnswerClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
            </div>
          </>
        )
      }
    </div>
  )
}

export default App
