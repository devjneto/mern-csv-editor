import mongoose from 'mongoose';
import { envs } from '@app/server/envs';

mongoose.connect(envs.MONGO_URL);

export default mongoose;
