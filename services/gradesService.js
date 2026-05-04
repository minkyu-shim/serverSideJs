import Grade from "../models/Grade.js";

export const findAllGrades = () => Grade.find();

export const findGradeById = (id) => Grade.findById(id);

export const findGradesByStudent = (studentId) => Grade.find({ studentId });

export const createGrade = (data) => Grade.create(data);

export const updateGrade = (id, data) =>
    Grade.findByIdAndUpdate(id, data, { new: true });

export const deleteGrade = (id) => Grade.findByIdAndDelete(id);
