import { Schema, model, models } from 'mongoose';

const AnalyticsSchema = new Schema({
	homepage_visits: { type: Number },
	posts_visits: { type: Number },
});

const Visits = models.Analytics || model('Analytics', AnalyticsSchema);

export default Visits;
