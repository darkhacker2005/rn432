/*
DARK KNIGHT
*/

function successfullMessage(msg) {
    return "✅ *DARK KNIGHT :*  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *DARK KNIGHT :*  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *DARK KNIGHT :*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
