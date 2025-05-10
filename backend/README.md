1. npm i -y
2. npm i express cookie-parser mongoose jsonwebtoken bcrypt validator nodemon
3. create app.js

docker run -d \
  --name blog \
  -p 27018:27017 \
  -v blog_data:/data/db \
  -e MONGO_INITDB_DATABASE=blogdb \
  -e MONGO_INITDB_ROOT_USERNAME=user \
  -e MONGO_INITDB_ROOT_PASSWORD=mongopass \
  mongo:latest