package com.est.attendance.models;

public class Course {
    private String courseId;
    private String courseName;
    private String instructor;
    private String schedule;
    private String room;
    private int totalClasses;
    private int attendedClasses;
    private double attendancePercentage;
    
    public Course(String courseId, String courseName, String instructor, String schedule, 
                  String room, int totalClasses, int attendedClasses) {
        this.courseId = courseId;
        this.courseName = courseName;
        this.instructor = instructor;
        this.schedule = schedule;
        this.room = room;
        this.totalClasses = totalClasses;
        this.attendedClasses = attendedClasses;
        this.attendancePercentage = (double) attendedClasses / totalClasses * 100;
    }
    
    // Getters and Setters
    public String getCourseId() { return courseId; }
    public void setCourseId(String courseId) { this.courseId = courseId; }
    
    public String getCourseName() { return courseName; }
    public void setCourseName(String courseName) { this.courseName = courseName; }
    
    public String getInstructor() { return instructor; }
    public void setInstructor(String instructor) { this.instructor = instructor; }
    
    public String getSchedule() { return schedule; }
    public void setSchedule(String schedule) { this.schedule = schedule; }
    
    public String getRoom() { return room; }
    public void setRoom(String room) { this.room = room; }
    
    public int getTotalClasses() { return totalClasses; }
    public void setTotalClasses(int totalClasses) { this.totalClasses = totalClasses; }
    
    public int getAttendedClasses() { return attendedClasses; }
    public void setAttendedClasses(int attendedClasses) { 
        this.attendedClasses = attendedClasses;
        this.attendancePercentage = (double) attendedClasses / totalClasses * 100;
    }
    
    public double getAttendancePercentage() { return attendancePercentage; }
}
