import Mongoose from 'mongoose';

const mongo = Mongoose.connect('mongodb://localhost/forms', (err) => {
  if (err) {
    console.error('Could not connect to mongodb at port 27017.');
  }
});

const FormsSchema = Mongoose.Schema({
  _id: String
});

export const Forms = Mongoose.model('forms', FormsSchema);
