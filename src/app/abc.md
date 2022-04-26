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

{"id":235649,"name":"olcayusta","username":"olcayusta","profile_image_90":"https://res.cloudinary.com/practicaldev/image/fetch/s--046oeuG0--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/235649/e9d0cffc-0c6d-46d8-a64c-16f952131980.png","followed_tags":"[{"bg_color_hex":"#f7df1e","hotness_score":23224308,"id":6,"name":"javascript","points":2.9459101490553135,"text_color_hex":"#000000"},{"bg_color_hex":"#562765","hotness_score":19625686,"id":8,"name":"webdev","points":3.1972245773362196,"text_color_hex":"#ffffff"},{"bg_color_hex":"#222222","hotness_score":3244633,"id":125,"name":"react","points":1.0,"text_color_hex":"#61DAF6"}]","followed_podcast_ids":[],"reading_list_ids":[156034],"blocked_user_ids":[],"saw_onboarding":true,"checked_code_of_conduct":true,"checked_terms_and_conditions":true,"display_sponsors":true,"display_announcements":true,"trusted":false,"moderator_for_tags":[],"config_body_class":"light-theme sans-serif-article-body trusted-status-false default-header","feed_style":"basic","created_at":"2019-09-24T15:07:46.654Z","admin":false,"policies":[{"dom_class":"js-policy-article-create","visible":true}],"apple_auth":false}
{"id":235649,"name":"olcayusta","username":"olcayusta","profile_image_90":"https://res.cloudinary.com/practicaldev/image/fetch/s--046oeuG0--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/235649/e9d0cffc-0c6d-46d8-a64c-16f952131980.png","followed_tags":"[{"bg_color_hex":"#f7df1e","hotness_score":23224308,"id":6,"name":"javascript","points":2.9459101490553135,"text_color_hex":"#000000"},{"bg_color_hex":"#562765","hotness_score":19625686,"id":8,"name":"webdev","points":3.1972245773362196,"text_color_hex":"#ffffff"},{"bg_color_hex":"#222222","hotness_score":3244633,"id":125,"name":"react","points":1.0,"text_color_hex":"#61DAF6"}]","followed_podcast_ids":[],"reading_list_ids":[156034],"blocked_user_ids":[],"saw_onboarding":true,"checked_code_of_conduct":true,"checked_terms_and_conditions":true,"display_sponsors":true,"display_announcements":true,"trusted":false,"moderator_for_tags":[],"config_body_class":"light-theme sans-serif-article-body trusted-status-false default-header","feed_style":"basic","created_at":"2019-09-24T15:07:46.654Z","admin":false,"policies":[{"dom_class":"js-policy-article-create","visible":true}],"apple_auth":false}
