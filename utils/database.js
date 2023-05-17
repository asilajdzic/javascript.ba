import mongoose from 'mongoose';

const connectToDB = async () => {
	try {
		if (mongoose.connection.readyState === 1) {
			console.log('MongoDB is already connected');
			return;
		}

		await mongoose.connect(process.env.MONGO_URI, {
			dbName: 'javascript.ba',
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('MongoDB connected');
	} catch (error) {
		console.error('MongoDB connection error:', error);
	}
};

export default connectToDB;
