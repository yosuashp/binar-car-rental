const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "CLOUD_NAME",
    api_key: "API_KEY",
    api_secret: "API_SECRET",
    secure: true,
});

// Edit where picture will be saved in cloudinary (folder)
const config = {
    dir: "car-management-api-sahat"
}

module.exports = { cloudinary, config };
