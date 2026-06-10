```js
SELECT * FROM notifications
WHERE studentID = 1042 AND isRead = false
ORDER BY DESC;
```
- Computation COst = O(Number of ROws);
- Query is correct but it will take too much time because it will check for each row
Instead of this we can use mongodb aggregation for isRead = false and also apply pagination
so that we send the data into multiple chunks 


### ADDING INDEXES
Not this thing is not safe because adding indexing will itself take a lot of space and we cannot add index for any thing it should be the thing which is frequently required

### LAST & DAYS
```js
SELECT * from notifications
WHERE (TIMESTAMP - Timestamp) <= 7;
```