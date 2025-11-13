import express from "express";
import Bug from "../models/Bug.js";

const router = express.Router();

// CREATE - Report new bug
router.post("/", async (req, res) => {
  try {
    const bug = new Bug(req.body);
    const savedBug = await bug.save();
    res.status(201).json(savedBug);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ - View all bugs
router.get("/", async (req, res) => {
  try {
    const bugs = await Bug.find().sort({ createdAt: -1 });
    res.json(bugs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE - Update bug status or info
router.put("/:id", async (req, res) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedBug);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE - Remove a bug
router.delete("/:id", async (req, res) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.json({ message: "Bug deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
