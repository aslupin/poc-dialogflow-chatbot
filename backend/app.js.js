const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const talkToChatbot = require("./chatbot");
const bodyParser = require("body-parser");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// var jsonParser = bodyParser.json();
// var urlEncoded = bodyParser.urlencoded({ extended: true });

app.post("/chatbot", function (req, res) {
    const message = req.body.message;
    console.log("message" + message);

    talkToChatbot(message)
        .then((response) => {
            res.send({ message: response });
        })
        .catch((error) => {
            console.log("Something went wrong: " + error);
            res.send({
                error: "Error occured here"
            });
        });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});