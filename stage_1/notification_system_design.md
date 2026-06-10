# Stage 1
Here we can built 2 routes 
```js
 /api/notification/send-all
 Method: POST
```
in this api we can create notfication in database and with the help of `socket.io` or `ws`
we can send these to every user

2nd one is
```js
/api/notification
Method: GET
```

from this api endpoint user can get all the notifications and from frontend we can call this api
as the user comes to site

### here is the schema
```js
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
  Timestamp: Date.now
});

const notificationSchema = new mongoose.model('notification', notificationSchema);
export default notificationSchema;
```