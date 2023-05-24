import { Schema, model, models } from 'mongoose';

const QuestionSchema = new Schema({
	question: { type: String, unique: [true, 'Questions must be unique'] },
	options: { type: [String] },
	answer: { type: String },
});

const Question = models.Questions || model('Questions', QuestionSchema);

export default Question;
