import express from "express";
import {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicketStatus,
  deleteTicketById, // Import the deleteTicketById function
  getTicketMiddleware,
} from "../controllers/ticketController.js";

const router = express.Router();

router.post("/", createTicket);
router.get("/", getAllTickets);
router.get("/:id", getTicketMiddleware, getTicketById);
router.put("/:id", getTicketMiddleware, updateTicketStatus);
router.delete("/:id", getTicketMiddleware, deleteTicketById);

export default router;
