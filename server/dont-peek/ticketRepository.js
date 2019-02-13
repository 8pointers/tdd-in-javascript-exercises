const { promisify } = require('util');

class TicketRepository {
  constructor(sqliteDb) {
    this.run = promisify(sqliteDb.run.bind(sqliteDb));
    this.init = this.run(`create table if not exists ticket(
      id integer primary key,
      player_id varchar(255) not null,
      price decimal(10, 2) not null,
      prize_level integer,
      scenario varchar(255),
      win_amount decimal(10, 2)
    )`);
  }

  async createTicket() {
    return this.init().then(() => this.run(``));
  }
}
