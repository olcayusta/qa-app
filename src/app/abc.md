```js
app.post('/multer', upload.single('file'), function (req, res) {
  // Need full filename created here
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file); // Here
});
```

You need recover file from this line

```js
res.send(file)
```

using file.filename This output sample

```json
{
  "fieldname": "myFile",
  "originalname": "isc te esta esperando.jpg",
  "encoding": "7bit",
  "mimetype": "image/jpeg",
  "destination": "uploads",
  "filename": "myFile-1602293858948.eaf",
  "path": "uploads/myFile-1602293858948.eaf",
  "size": 297720
} 
```
