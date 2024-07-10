const express = require('express');
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const multer = require("multer");
const path = require("path");
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors()); 

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is Connected at ${PORT}`));

// Database Connection
mongoose.connect("mongodb+srv://Kiran_30:Happy%40026@cluster0.4yvde3d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/e-commerce")
.then(() => { console.log('auth db is connected') })
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Image Storage Engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'upload/images'));
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Creating Upload Endpoint for images
app.use('/images', express.static(path.join(__dirname, 'upload/images')));
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${PORT}/images/${req.file.filename}`
    });
});

// Schema for creating products
const Product = mongoose.model("Product", {
    id: {
        type: Number,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    available: {
        type: Boolean,
        default: true,
    }
});

app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product = products[products.length - 1];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    await product.save();
    console.log("Saved");
    res.json({
        success: true,
        name: req.body.name,
    });
});

//creating api for deleting products
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success: 1,
        name: req.body.name
    })
})

//Creating API for getting All products
app.get('/allproducts', async(req, res)=> {
    let products = await Product.find({});
    console.log("All products Fetched");
    res.send(products);
})

