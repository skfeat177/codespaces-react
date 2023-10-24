import React, { useState, useEffect } from 'react';
import './style.css';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';
function EasyQuiz() {
  const navigate = useNavigate();
  const [point, setPoint] = useState(0);
  const [updatepoint, setUpdatePoint] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showSubModal, setShowSubModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [timeLeft, setTimeLeft] = useState(7);
  let timer; // Define timer variable

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quizapiurl = process.env.REACT_APP_QUIZ_API_URL
        const response = await fetch(`${quizapiurl}/api.php?amount=10&difficulty=hard&type=multiple`);
        if (response.ok) {
          const data = await response.json();
          setQuestions(data.results);
          setShowModal(false); // Hide the modal after successful API response
        } else {
          // Handle the API error here
          console.error('API request failed');
        }
      } catch (error) {
        // Handle any exceptions that may occur during the fetch
        console.error('An error occurred while fetching data', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    } else if (timeLeft < 0) {
      setTimeLeft(0);
    }

    if (questionIndex === questions.length - 1 && timeLeft == 0) {
      AutoQuizSubmit(); // Invoke AutoQuizSubmit when the last question's time runs out
    }

    timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);




  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedOption('');
      setIsCorrect(null);
      setTimeLeft(7); // Reset timer for the next question
    } else {
      setShowSubmitButton(true);
      clearInterval(timer); // Clear the timer when the quiz is complete
    }
  };

  const handleOptionClick = (option) => {
    const correctOption = questions[questionIndex].correct_answer;
    const isCorrectAnswer = option === correctOption;

    if (isCorrectAnswer) {
      setPoint(point + 20);
    } else {
      setPoint(point - 10);
    }

    setIsCorrect(isCorrectAnswer);
    setSelectedOption(option);
    setTimeLeft(0); // Move to the next question immediately

    // Delay moving to the next question
    setTimeout(() => {
      handleNextQuestion();
    }, 1000);
  };

  const AutoQuizSubmit = () => {
    if (questionIndex === questions.length - 1 && timeLeft === 0 && !showSubModal) {
      // Show the modal with a loading message
      setShowSubModal(true);
      const accountID = localStorage.getItem('accountID');
      const apiurl = process.env.REACT_APP_BACKEND_URL;

      if (accountID) {
        fetch(`${apiurl}/getpoints?id=${accountID}`)
          .then((response) => response.json())
          .then((data) => {
            console.log('Response data:', data);
            const points = data.currentPoints;
            const updatedPoints = points + point;

            if (accountID) {
              const updateUrl = `${apiurl}/updatepoints?id=${accountID}`;

              fetch(updateUrl, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ currentPoints: updatedPoints }),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log('Updated points:', data);

                  const apiurl = process.env.REACT_APP_BACKEND_URL;

                  if (accountID) {
                    const quizPlayedUrl = `${apiurl}/quizplayed?id=${accountID}`;

                    fetch(quizPlayedUrl, {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    })
                      .then((response) => response.json())
                      .then((data) => {
                        console.log('Quiz played:', data);
                        navigate("/wallet")
                        setShowSubModal(false);
                      })
                      .catch((error) => {
                        console.error('Error updating quiz played:', error);
                      });
                  }
                })
                .catch((error) => {
                  console.error('Error updating points:', error);
                });
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }
    }
  };


  if (questions.length === 0) {
    return <Modal show={showModal} data="Loading Questions" />;
  }

  const currentQuestion = questions[questionIndex];
  const correctOption = currentQuestion.correct_answer;

  return (
    <div style={{ marginTop: 80 }} className="container">
      <Modal show={showSubModal} data="Updating Balance" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="box">
          Points: <span className={point < 0 ? 'text-danger' : 'text-success'}>{point}</span>
        </div>
        <div className="box">Time Left: {timeLeft} Secs</div>
      </div>

      <div
        className="question mt-4 mb-5"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontWeight: 'bold',
            fontFamily: 'Acme',
            textAlign: 'center',
            fontSize: window.innerWidth > 768 ? '2rem ' : '1.6rem',
            marginTop: 10,
          }}
          className={`text-primary`}
          dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
        />

        {currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).map((option, index) => (
          <div
            className={`option ${isCorrect !== null && option === selectedOption ? (isCorrect ? 'correct' : 'incorrect') : ''
              }`}
            key={index}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EasyQuiz;
