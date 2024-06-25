import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  user_id: {
    require: true,
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
  profile_img_url: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
