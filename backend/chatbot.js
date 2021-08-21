const dialogflow = require("@google-cloud/dialogflow");
const uuid = require("uuid");
const dialogflowConfig = require("./config");
const Path = require("path")

const projectId = dialogflowConfig.project_id;
const sessionId = uuid.v4();
const languageCode = "en-US";
const sessionClient = new dialogflow.SessionsClient({
    keyFilename: Path.join(__dirname, "./key.json"), 
})
const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

async function talkToChatbot(message) {
    const botRequest = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode
            }
        }
    };

    const response = await sessionClient
        .detectIntent(botRequest)
        .then((responses) => {
            console.log("response: ", JSON.stringify(responses));
            const requiredResponse = responses[0].queryResult;
            return requiredResponse;
        })
        .catch((error) => {
            console.log("ERROR: " + error);
        });

    return response;
}

module.exports = talkToChatbot;