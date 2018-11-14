let messages = [];

let id = 0;

module.exports = {
    //working
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send( messages );
    },
    
    read: (req, res) => {
        res.status(200).send(messages);
    },

    update: (req, res) => {
        //id in param
        const updateId = Number(req.params.id);
        //index to update in message array
        const messageIndex = messages.findIndex(message => message.id === updateId);
        //message = the object in messages array we are updating
        let message = messages[messageIndex];
        // console.log("should be message id", req.params, messageIndex, messages);
        messages[messageIndex] = {
            id: message.id,
            text: req.body.text || message.text,
            time: message.time
        }
        // console.log("after", messages);
        res.status(200).send(messages);
    },

    delete: (req, res) => {
        const { id } = req.params;
        messages = messages.filter(message => message.id !== Number(id));
        res.status(200).send(messages);
    }
}

