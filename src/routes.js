const express = require('express');
const db = require('../src/handler/db-handler/connection/connect_database')

const upload = require("./handler/upload");
const uploadOnMemory = require("./handler/uploadOnMemory");
const cloudinary = require("./handler/cloudinary");
const { Car } = require("./handler/db-handler/models");

const router = express.Router();
const CLOUDINARY_DIR = "bcr-management-dashboard"


// API ROUTES
router.get('/', (req, res) => {
    res.json({
      status: "success",
      message: 'Halo! Welcome to Car Management Dashboard by Sahat'
    });
  });
  
  router.get('/cars', async (req, res) => {
    try {
      const cars = await Car.query();
      res.status(200).json({
        status: "success",
        message: "Get all car data successfully",
        data: cars
      });
      console.log('berhasil mengambil semua data mobil', cars)
    } catch (err) {
      res.status(500).json({
        status: "failed",
        message: `Get all car data failed: ${err.message}`
      });
    }
  });
  
  router.get('/cars/:carId', async (req, res) => {
    const carId = req.params.carId
    console.log('berhasil mengambil data pada Id', carId)
  
    try {
      const car = await Car.query().findById(carId);
  
      if (car) {
        res.status(200).json({
          status: "success",
          message: `Get car data with id=${carId} successfully`,
          data: car
        });
      } else {
        res.status(404).json({
          status: "failed",
          message: `Car data with id=${carId} not found`
        });
      }
    } catch (err) {
      res.status(500).json({
        status: "failed",
        message: `Get car data failed: ${err.message}`
      });
    }
  });
  
  router.post('/cars', async (req, res) => {
    const carData = {
      name: req.body.name,
      size: req.body.size,
      rent_per_day: req.body.rentPerDay,
      image_id: req.body.imageId,
      image_url: req.body.imageUrl,
    };
  
    try {
      await Car.query().insert(carData);
      res.status(201).json({
        status: "success",
        message: "Add data successfully",
      });
    } catch (err) {
      res.status(422).json({
        status: "failed",
        message: `Add data failed: ${err.message}`,
      });
    }
  });
  
  
  router.put('/cars/:carId', async (req, res) => {
    const carId = req.params.carId;
    // console.log(carId)
  
    // Ensure car exists
    const car = await Car.query().findById(carId);
    if (!car) {
      return res.status(404).json({
        status: "failed",
        message: `Car data with id=${carId} not found`
      });
    }
  
    let data = {
      name: req.body.name,
      size: req.body.size,
      rent_per_day: req.body.rentPerDay,
    };
  
    if (req.body.editImg) {
      data = {
        ...data,
        image_id: req.body.imageId,
        image_url: req.body.imageUrl
      };
    }
  
    try {
      await Car.query().findById(carId).patch(data);
      res.status(200).json({
        status: "success",
        message: `Edit data with id=${carId} successfully`
      });
    } catch (err) {
      res.status(422).json({
        status: "failed",
        message: `Edit data with id=${carId} failed: ${err.message}`
      });
    }
    console.log('berhasil update data mobil di ID', carId, data)
  });
  
  router.delete('/cars/:carId', async (req, res) => {
    const carId = req.params.carId;
  
    try {
      // Ensure car exists
      const car = await Car.query().findById(carId);
  
      if (!car) {
        return res.status(404).json({
          status: "failed",
          message: `Car data with id=${carId} not found`
        });
      }
  
      // Delete car from the database
      await Car.query().deleteById(carId);
      res.status(200).json({
        status: "success",
        message: `Delete data with id=${carId} successfully`
      });
    } catch (err) {
      res.status(422).json({
        status: "failed",
        message: `Delete data with id=${carId} failed: ${err.message}`
      });
    }
  });
  

// IMAGE UPLOAD HANDLER
router.post("/cars/picture/cloudinary",
    uploadOnMemory.single("picture"),
    (req, res) => {
        const public_id = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const fileBase64 = req.file.buffer.toString("base64");
        const file = `data:${req.file.mimetype};base64,${fileBase64}`;

        cloudinary.uploader
            .upload(file, {
                height: 160, width: 270, crop: "fit",
                folder: "bcr-management-dashboard", public_id: public_id
            })
            .then(result => {
                res.status(201).json({
                    status: "success",
                    message: "Upload image successfully",
                    url: result.url,
                    public_id: public_id
                });
            })
            .catch(err => {
                res.status(422)
                    .json({
                        status: "failed",
                        message: `Post image failed: ${err.message}`
                    })
            })

    }
);

// ERROR HANDLER
router.use((error, request, response, next) => {
    response.status(error.status || 500).json({
        status: 'error',
        message: error.message || serverErrorMsg,
    });
});


module.exports = router;