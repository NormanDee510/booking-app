import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../booking-app/api/controllers/hotelcontroller.js";

const router = express.Router();

//CREATE
router.post("/", createHotel)
//UPDATE
router.put("/:id", updateHotel)
//DELETE
router.delete("/:id", deleteHotel)
//GET
router.get("/:id", getHotel)
//GET ALL
router.get("/", getAllHotels)   

export default router