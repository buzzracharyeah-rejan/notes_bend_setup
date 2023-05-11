// Import required modules
import mongoose from 'mongoose';
import { TOKEN } from '../constants';

// Define the token schema
const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  token_type: {
    type: String,
    enum: [TOKEN.access_token, TOKEN.refresh_token],
    required: true,
  },
});

// Create the Token model based on the token schema
const Token = mongoose.model('Token', tokenSchema);

// Export the Token model
export default Token;
