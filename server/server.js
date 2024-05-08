const express = require('express');
const cors = require('cors');
const multer = require("multer");
const { scan } = require('./utils/ocr')


const app = express();
app.use(cors());


const upload = multer({ dest: "/uploads" });

app.get('/', express.json(), async (req, res) => {
    console.log("ping")
    res.status(200).send({ "message": 'online' });
});


app.post("/upload", upload.single("file"), async (req, res) => {
    console.log("Received file:", req.file);

    scan(req.file.path)

    res.json({
        message: "File uploaded successfully!",
        fileName: req.file.filename,
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
