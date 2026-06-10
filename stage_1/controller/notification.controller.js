import notificationModel from '../db/notification.model.js';
import { Log } from "../../logging_middleware";


export const sendNotifications = async (req, res) => {
  try {
    if (!req.body) {
      return res.send("Invalid Request");
    }
    const newNotification = new notificationModel.create(req.body);
    // Here we can emit 
    // io.emit('notification:new', newNotification);

    res.json({
      message: 'Notification sent successfully'
    });
  } catch (error) {
    Log('backend', 'error', 'controller', error.message);
    return res.status(400).json({
      message: "Somethig went wrong"
    })
  }
}

export const getAllNotifications = async (req, res) => {
  try {
    const allNotif = await notificationModel.find().limit(20);
    return res.json({
      notifications: allNotif
    })
  } catch (error) {
    Log('backend', 'error', 'controller', error.message);
  }
}