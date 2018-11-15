let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        let { text, time } = req.body;
        message = {
            text: text,
            time: time,
            id: id
        }
        messages.push( message );
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        let { text } = req.body;
        let { id } = req.params;
        console.log("should be id", id)
        let messageIndex = messages.findIndex(message => {
            return message.id === Number(id);
        })
        console.log("message index", messageIndex, "messages", messages)
        if(messageIndex === -1) {
            res.status(404).send({error: "no such message index!"})
            return;
        }
        messages[messageIndex] = {
            text: text,
            time: req.body.time,
            id: Number(id)
        }
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        let { id } = req.params;
        messages = messages.filter(message => {
            return message.id !== Number(id);
        })
        res.status(200).send(messages);
    }
}