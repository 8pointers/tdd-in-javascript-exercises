class MessageOfTheDay {
  constructor(messages, rng) {
    this.messages = messages;
    this.rng = rng;
  }

  getMessage() {
    return this.messages[this.rng.getNumber(0, this.messages.length)];
  }
}

export default MessageOfTheDay;
