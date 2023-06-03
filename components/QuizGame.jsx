import { useState, useEffect } from 'react';

const timeToAnswer = 15; //seconds

const QuizGame = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [difficulty, setDifficulty] = useState('');
	const [timer, setTimer] = useState(timeToAnswer);
	const [filteredQuestions, setFilteredQuestions] = useState([]);

	useEffect(() => {
		let intervalId;
		if (timer > 0 && currentQuestion < filteredQuestions.length && !showScore) {
			intervalId = setInterval(() => {
				setTimer((prevTimer) => prevTimer - 1);
			}, 1000);
		} else if (
			timer === 0 &&
			currentQuestion < filteredQuestions.length &&
			!showScore
		) {
			handleAnswerOptionClick('');
		}
		return () => {
			clearInterval(intervalId);
		};
	}, [timer, currentQuestion, filteredQuestions.length, showScore]);

	useEffect(() => {
		const fetchQuestions = async () => {
			const response = await fetch(`/api/quiz/questions/${difficulty}`);
			const data = await response.json();
			setFilteredQuestions(data);
		};
		if (
			difficulty === 'easy' ||
			difficulty === 'medium' ||
			difficulty === 'hard'
		)
			fetchQuestions();
	}, [difficulty]);

	const handleDifficultySelect = (selectedDifficulty) => {
		setDifficulty(selectedDifficulty);
		setCurrentQuestion(0);
		setScore(0);
		setShowScore(false);
		setTimer(timeToAnswer);
	};

	const handleAnswerOptionClick = (selectedAnswer) => {
		const currentQuestionObj = filteredQuestions[currentQuestion];
		const isAnswerCorrect = selectedAnswer === currentQuestionObj.answer;

		if (isAnswerCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < filteredQuestions.length) {
			setCurrentQuestion(nextQuestion);
			setTimer(timeToAnswer);
		} else {
			setShowScore(true);
		}
	};

	const handleRestartGame = () => {
		setDifficulty('');
		setCurrentQuestion(0);
		setScore(0);
		setShowScore(false);
		setTimer(timeToAnswer);
		setFilteredQuestions([]);
	};

	return (
		<section className='flex-1 h-full flex flex-col items-center justify-center px-6 mb-10 font-roboto'>
			<div className='h-[40rem] p-6 mb-10 bg-white shadow-xl hover:shadow-2xl rounded-lg flex flex-col justify-center'>
				{difficulty && filteredQuestions.length > 0 && !showScore ? (
					<div className='flex flex-col gap-6 text-center'>
						<div className='text-gray-600'>
							Question {currentQuestion + 1}/{filteredQuestions.length}
						</div>
						<div className='text-xl font-semibold'>
							{filteredQuestions[currentQuestion].question}
						</div>
						{filteredQuestions[currentQuestion].options.map((option) => (
							<button
								key={option}
								className='quiz_button'
								onClick={() => handleAnswerOptionClick(option)}
								disabled={timer === 0}
							>
								{option}
							</button>
						))}
						<div className='text-gray-600'>Time left: {timer}s</div>
					</div>
				) : showScore ? (
					<div className='text-center'>
						<h3 className='text-2xl font-semibold mb-4'>Quiz Finished!</h3>
						<p className='text-gray-600 mb-4'>
							You scored {score} out of {filteredQuestions.length}.
						</p>
						<button className='quiz_button' onClick={handleRestartGame}>
							Restart Game
						</button>
					</div>
				) : (
					<div className='flex flex-col gap-10 text-center'>
						<p className='text-xl font-semibold'>
							Would you like to participate in a JavaScript quiz?
						</p>
						<p className='text-xl font-semibold mb-4'>Select Difficulty:</p>
						<button
							className='quiz_button'
							onClick={() => handleDifficultySelect('easy')}
						>
							Easy
						</button>
						<button
							className='quiz_button'
							onClick={() => handleDifficultySelect('medium')}
						>
							Medium
						</button>
						<button
							className='quiz_button'
							onClick={() => handleDifficultySelect('hard')}
						>
							Hard
						</button>
					</div>
				)}
			</div>
		</section>
	);
};

export default QuizGame;
