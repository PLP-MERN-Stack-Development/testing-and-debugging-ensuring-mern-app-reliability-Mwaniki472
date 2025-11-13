import Bug from "../models/Bug.js";
import { log } from "../utils/logger.js";

// Create new bug
export const createBug = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    if (!title || !description) {
      res.status(400);
      throw new Error("Title and description are required");
    }
    const newBug = await Bug.create({ title, description, status });
    log("New bug created:", newBug.title);
    res.status(201).json(newBug);
  } catch (err) {
    next(err); // Pass error to centralized middleware
  }
};

// Get all bugs
export const getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (err) {
    next(err);
  }
};

// Update bug
export const updateBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bug = await Bug.findById(id);
    if (!bug) {
      res.status(404);
      throw new Error("Bug not found");
    }

    const updated = await Bug.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

// Delete bug
export const deleteBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bug = await Bug.findById(id);
    if (!bug) {
      res.status(404);
      throw new Error("Bug not found");
    }

    await bug.deleteOne();
    res.json({ message: "Bug deleted successfully" });
  } catch (err) {
    next(err);
  }
};
