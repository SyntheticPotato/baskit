const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = 3000;

app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the folder where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Use the original filename for uploaded files
    },
});

const upload = multer({ storage: storage });

app.get('/', express.json(), async (req, res) => {
    console.log("ping")
    res.status(200).send({ "message": 'online' });
    // res.send('online')
});

app.post('/upload', upload.single('image'), (req, res) => {
    // Handle file upload here
    // For simplicity, we'll just send a success response
    res.send({ success: true, message: 'Image received successfully' });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
