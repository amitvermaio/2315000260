```js
let limit = req.query.limit || 10;
const allNotif = [];
const placementNotif = await Notification.find({ isRead: false, Type: 'placement' }).limit(limit);
allNotif.push(placementNotif);
let remainingLength = allNotif.length;
if (allNotif.length < limit) {
  const resultNotif = await Notification.find({ isRead: false, Type: 'result' }).limit(limit-remainingLength);

  allNotif.push(resultNotif);
  remainingLength = allNotif.length;
}

if (remainingLength < limit-remainingLength) {
  const eventNotif = await Notifcation.find({ isRead: false, Type: 'event' }).limit(limit-remainingLength);
}


```