# Stage 2

Here SQL and NoSQL database anyone can be used because with the help of NoSQL we can easily add other fields to database and since notifications are not extreme crucial things we can use mongodb as well but we need 

SQL can be used because it will make  sure that all the fields are there. 

I Prefer MongoDB here
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

### Q: What problem arises as the data size increase
- when the data size increases the queries on db may become costly and we need to add pagination to it.

SQL Query
```js
SELECT * FROM notifications;
```

NoSQL Query
```js
notificationModel.find();
```

