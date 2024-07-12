import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  user_id: {
    required: false,
    type: Number,
  },
  name: {
    type: String,
  },
  riot_game_name: {
    type: String,
  },
  riot_tag_id: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'active'],
    required: false,
    default: 'pending',
  },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
