import {
    findAllGrades,
    findGradeById,
    findGradesByStudent,
    createGrade,
    updateGrade,
    deleteGrade,
} from "../services/gradesService.js";

export const getAllGrades = async (req, res) => {
    try {
        const grades = await findAllGrades();
        res.status(200).json(grades);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

export const getGradeById = async (req, res) => {
    try {
        const grade = await findGradeById(req.params.id);
        if (!grade) return res.status(404).json({ msg: "Grade not found" });
        res.status(200).json(grade);
    } catch {
        res.status(400).json({ msg: "Invalid grade ID" });
    }
};

export const getGradesByStudent = async (req, res) => {
    try {
        const grades = await findGradesByStudent(req.params.studentId);
        res.status(200).json(grades);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

export const createGradeHandler = async (req, res) => {
    try {
        const grade = await createGrade(req.body);
        res.status(201).json(grade);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

export const updateGradeHandler = async (req, res) => {
    try {
        const updated = await updateGrade(req.params.id, req.body);
        if (!updated) return res.status(404).json({ msg: "Grade not found" });
        res.status(200).json(updated);
    } catch {
        res.status(400).json({ msg: "Invalid grade ID" });
    }
};

export const deleteGradeHandler = async (req, res) => {
    try {
        const deleted = await deleteGrade(req.params.id);
        if (!deleted) return res.status(404).json({ msg: "Grade not found" });
        res.status(200).json({ msg: "Grade deleted" });
    } catch {
        res.status(400).json({ msg: "Invalid grade ID" });
    }
};
