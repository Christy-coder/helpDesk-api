import Ticket from "../models/Ticket.js";

const createTicket = async (req, res) => {
  try {
    const { name, email, description } = req.body;
    const ticket = new Ticket({ name, email, description });
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

const getAllTickets = async (_req, res) => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const getTicketById = async (_req, res) => {
  res.json(res.ticket);
}

const updateTicketStatus = async (req, res) => {
  try {
    res.ticket.status = req.body.status;
    await res.ticket.save();
    res.json(res.ticket);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

const deleteTicketById = async (req, res) => {
  try {
    await res.ticket.remove();
    res.json({ message: "Ticket deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const getTicketMiddleware = async (req, res, next) => {
  let ticket;
  try {
    ticket = await Ticket.findById(req.params.id);
    if (ticket == null) {
      return res.status(404).json({ message: "Ticket not found" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.ticket = ticket;
  next();
}

export { createTicket, getAllTickets, getTicketById, updateTicketStatus, deleteTicketById, getTicketMiddleware };
