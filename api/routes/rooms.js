import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../../api/controllers/roomcontroller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/:hotelid",verifyAdmin, createRoom)
//UPDATE
router.put("/:id",verifyAdmin, updateRoom)
//DELETE
router.delete("/:id/:hotelid",verifyAdmin, deleteRoom)
//GET
router.get("/:id", getRoom)
//GET ALL
router.get("/", getAllRooms)   

export default router