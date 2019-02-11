class TicketService {
  constructor(ticketRepository, wallet, engine) {
    this.ticketRepository = ticketRepository;
    this.wallet = wallet;
    this.engine = engine;
  }

  async purchaseTicket(authContext, price) {
    const ticket = await this.ticketRepository.createTicket({ price });
    const [prizeLevel, winAmount, scenario] = await this.engine.getOutcome(price);
    await this.wallet.debit(authContext.playerId, ``, price);
    return this.ticketRepository.updateTicket(ticket.ticketId, { state: 'P', prizeLevel, winAmount, scenario });
  }

  async settleTicket(authContext, ticketId) {
    const ticket = await this.ticketRepository.findTicket(ticketId);
    await this.wallet.credit(authContext.playerId, ticket.winAmount);
    await this.ticketRepository.updateTicket(ticketId, { state: 'S' });
  }
}

module.exports = TicketService;
