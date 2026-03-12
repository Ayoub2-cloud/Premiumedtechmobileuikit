package com.est.attendance.models;

import java.time.LocalDate;
import java.time.LocalTime;

public class Attendance {
    private String attendanceId;
    private String courseId;
    private String courseName;
    private LocalDate date;
    private LocalTime time;
    private String status; // "Present", "Absent", "Late"
    
    public Attendance(String attendanceId, String courseId, String courseName, 
                     LocalDate date, LocalTime time, String status) {
        this.attendanceId = attendanceId;
        this.courseId = courseId;
        this.courseName = courseName;
        this.date = date;
        this.time = time;
        this.status = status;
    }
    
    // Getters and Setters
    public String getAttendanceId() { return attendanceId; }
    public void setAttendanceId(String attendanceId) { this.attendanceId = attendanceId; }
    
    public String getCourseId() { return courseId; }
    public void setCourseId(String courseId) { this.courseId = courseId; }
    
    public String getCourseName() { return courseName; }
    public void setCourseName(String courseName) { this.courseName = courseName; }
    
    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }
    
    public LocalTime getTime() { return time; }
    public void setTime(LocalTime time) { this.time = time; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}
