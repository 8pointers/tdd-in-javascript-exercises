const rpc = require('../util/rpc');
const TicketService = require('./ticket.js');

const ticketService = new TicketService();

rpc({ ticketService });
