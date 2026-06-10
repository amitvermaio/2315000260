import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  Type: {
    type: String,
    required: true
  },
  Message: {
    type: String,
    required: true
  },
  isRead: Boolean,
  to: {
    type: String,
  },
  Timestamp: Date.now
});

const notificationSchema = new mongoose.model('notification', notificationSchema);
export default notificationSchema;