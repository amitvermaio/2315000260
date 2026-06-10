// Since it is not in data base and also the query or any other filteration detaails not provided in the document
// I cannot do it with api fetch if the query details in api will be given then I could.
export const getTopNotification = async (req, res) => {
  try {
    const limit = req.query.limit ?? 10;
    const allNotif = [];
    const placementNotif = await Notification.find({ isRead: false, Type: 'placement' }).limit(limit);
    allNotif.push(placementNotif);
    let remainingLength = allNotif.length;
    if (allNotif.length < limit) {
      const resultNotif = await Notification.find({ isRead: false, Type: 'result' }).limit(limit - remainingLength);

      allNotif.push(...resultNotif);
      remainingLength = allNotif.length;
    }

    if (remainingLength < limit - remainingLength) {
      const eventNotif = await Notifcation.find({ isRead: false, Type: 'event' }).limit(limit - remainingLength);
      allNotif.push(...eventNotif);
    }

    res.json(allNotif);
  } catch (error) {
    return res.json({
      message: "Error Fetching Notifications"
    })
  }
}