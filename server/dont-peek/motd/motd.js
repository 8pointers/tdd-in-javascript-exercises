class MessageOfTheDayService {
  constructor(messages) {
    this.messages = messages;
  }
  getMessage() {
    return this.messages[Math.floor(this.messages.length * Math.random())];
  }
}

module.exports = MessageOfTheDayService;
