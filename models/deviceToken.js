// Import required modules
const mongoose = require('mongoose');

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
    enum: ['refresh_token', 'access_token'],
    required: true,
  },
  expires_at: {
    type: Date,
    required: true,
  },
});

// Create the Token model based on the token schema
const Token = mongoose.model('Token', tokenSchema);

// Export the Token model
export default Token;
