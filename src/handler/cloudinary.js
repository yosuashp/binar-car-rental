// Require the Cloudinary library
const cloudinary = require('cloudinary');

cloudinary.v2.config({
  cloud_name: 'dvkcmkxpe',
  api_key: '217725728144716',
  api_secret: '53z28VG5q8KzxujhvcqxMU6xjHA',
  secure: true,
});

module.exports = cloudinary;
