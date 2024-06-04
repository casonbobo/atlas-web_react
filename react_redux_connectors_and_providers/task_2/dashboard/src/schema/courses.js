const mongoose = require('mongoose');
const Course = require('./schema/courses');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  instructor: { type: String, required: true },
  duration: { type: Number, required: true },
  startDate: { type: Date },
  endDate: { type: Date },
});

function coursesNormalizer(data) {
  const normalizedCourses = [];

  data.forEach((course) => {
    const normalizedCourse = new Course({
      title: course.title,
      description: course.description,
      instructor: course.instructor,
      duration: course.duration,
      startDate: course.startDate,
      endDate: course.endDate,
    });

    normalizedCourses.push(normalizedCourse);
  });
}

module.exports = mongoose.model('Course', courseSchema);
