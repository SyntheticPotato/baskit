const { createWorker } = require('tesseract.js');

const scan = async (img) => {
    console.log("attempting to scan the image")
    const worker = await createWorker('eng');
    const ret = await worker.recognize(img);
    console.log(ret.data.text);
    await worker.terminate();
    return (ret.data.text)
}

module.exports = { scan };