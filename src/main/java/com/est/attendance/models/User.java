package com.est.attendance.models;

public class User {
    private String id;
    private String name;
    private String email;
    private String role;
    private String matrixNumber;
    private String department;
    private String semester;
    private String profileImage;
    private double gpa;
    
    public User(String id, String name, String email, String role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    
    public User(String id, String name, String email, String role, String matrixNumber, 
                String department, String semester, String profileImage, double gpa) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.matrixNumber = matrixNumber;
        this.department = department;
        this.semester = semester;
        this.profileImage = profileImage;
        this.gpa = gpa;
    }
    
    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
    
    public String getMatrixNumber() { return matrixNumber; }
    public void setMatrixNumber(String matrixNumber) { this.matrixNumber = matrixNumber; }
    
    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }
    
    public String getSemester() { return semester; }
    public void setSemester(String semester) { this.semester = semester; }
    
    public String getProfileImage() { return profileImage; }
    public void setProfileImage(String profileImage) { this.profileImage = profileImage; }
    
    public double getGpa() { return gpa; }
    public void setGpa(double gpa) { this.gpa = gpa; }
}
