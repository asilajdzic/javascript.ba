import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
	heading: { type: String, required: [true, 'Post must have a heading'] },
	body: { type: String, required: [true, 'Post must have a body'] },
	tags: { type: [String], required: [true, 'Post must have at least one tag'] },
	date: { type: Date },
	views: { type: Number },
});

const Posts = models.Posts || model('Posts', PostSchema);

export default Posts;
