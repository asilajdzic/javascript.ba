import { Schema, model, models } from 'mongoose';

const PostSchema = new Schema({
	author: { type: Schema.Types.ObjectId, ref: 'Author' },
	technology: { type: String, required: [true, 'Post must have a technology'] },
	category: { type: String, required: [true, 'Post must have a category'] },
	heading: { type: String, required: [true, 'Post must have a heading'] },
	body: { type: String, required: [true, 'Post must have a body'] },
	imageUrl: { type: String, required: [true, 'Post must have an image'] },
	tags: { type: [String], required: [true, 'Post must have at least one tag'] },
	createdAt: { type: Date },
	views: { type: Number },
});

const Post = models.Posts || model('Posts', PostSchema);

export default Post;
