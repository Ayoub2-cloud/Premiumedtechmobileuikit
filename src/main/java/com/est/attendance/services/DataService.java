package com.est.attendance.services;

import com.est.attendance.models.Course;
import java.util.ArrayList;
import java.util.List;

public class DataService {
    private static DataService instance;
    private List<Course> courses;

    private DataService() {
        this.courses = new ArrayList<>();
        initializeData();
    }

    public static DataService getInstance() {
        if (instance == null) {
            instance = new DataService();
        }
        return instance;
    }

    private void initializeData() {
        courses.add(new Course("JAVA101", "Java Programming", "Dr. Mohammed Bennani", 
                "Monday 10:00-12:00", "Room 101", 20, 18));
        courses.add(new Course("DB101", "Database Design", "Dr. Laila Khadija", 
                "Tuesday 14:00-16:00", "Room 202", 18, 17));
        courses.add(new Course("WEB101", "Web Development", "Dr. Mohammed Bennani", 
                "Wednesday 10:00-12:00", "Room 103", 22, 21));
        courses.add(new Course("ALGO101", "Algorithms", "Dr. Laila Khadija", 
                "Thursday 14:00-16:00", "Room 204", 19, 16));
        courses.add(new Course("SEC101", "Cybersecurity", "Dr. Mohammed Bennani", 
                "Friday 10:00-12:00", "Room 105", 20, 19));
    }

    public List<Course> getAllCourses() {
        return new ArrayList<>(courses);
    }

    public Course getCourseById(String courseId) {
        return courses.stream()
                .filter(c -> c.getCourseId().equals(courseId))
                .findFirst()
                .orElse(null);
    }
}
