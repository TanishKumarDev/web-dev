const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        console.log('Logging:', message);
        this.emit('messageLogged', { message, time: new Date() });
    }
}

module.exports = Logger;
