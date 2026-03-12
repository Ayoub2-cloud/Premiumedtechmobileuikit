package com.est.attendance.services;

import com.est.attendance.models.Session;
import com.est.attendance.models.User;
import java.util.HashMap;
import java.util.Map;

public class AuthenticationService {
    private static AuthenticationService instance;
    
    // Mock user database
    private Map<String, User> users;
    private Map<String, String> passwords;
    
    private AuthenticationService() {
        initializeMockUsers();
    }
    
    public static AuthenticationService getInstance() {
        if (instance == null) {
            instance = new AuthenticationService();
        }
        return instance;
    }
    
    private void initializeMockUsers() {
        users = new HashMap<>();
        passwords = new HashMap<>();
        
        // Student mock data
        User student1 = new User(
            "STU001",
            "Ahmed Mohammed",
            "ahmed.mohammed@est.edu",
            "STUDENT",
            "EST2022001",
            "Computer Science",
            "4",
            "/images/avatar1.png",
            3.85
        );
        users.put("ahmed@est.edu", student1);
        passwords.put("ahmed@est.edu", "password123");
        
        User student2 = new User(
            "STU002",
            "Fatima Al-Rashid",
            "fatima.rashid@est.edu",
            "STUDENT",
            "EST2022002",
            "Information Technology",
            "3",
            "/images/avatar2.png",
            3.92
        );
        users.put("fatima@est.edu", student2);
        passwords.put("fatima@est.edu", "password123");
        
        // Professor mock data
        User professor1 = new User(
            "PROF001",
            "Dr. Mohamed Hassan",
            "m.hassan@est.edu",
            "PROFESSOR",
            null,
            "Computer Science",
            null,
            "/images/avatar3.png",
            0.0
        );
        users.put("hassan@est.edu", professor1);
        passwords.put("hassan@est.edu", "password123");
        
        User professor2 = new User(
            "PROF002",
            "Dr. Leila Benali",
            "l.benali@est.edu",
            "PROFESSOR",
            null,
            "Information Technology",
            null,
            "/images/avatar4.png",
            0.0
        );
        users.put("benali@est.edu", professor2);
        passwords.put("benali@est.edu", "password123");
    }
    
    public boolean authenticate(String email, String password) {
        if (!passwords.containsKey(email)) {
            return false;
        }
        return passwords.get(email).equals(password);
    }
    
    public void login(String email, String password) throws Exception {
        if (!authenticate(email, password)) {
            throw new Exception("Invalid credentials");
        }
        
        User user = users.get(email);
        if (user == null) {
            throw new Exception("User not found");
        }
        
        Session.getInstance().login(user);
    }
    
    public void logout() {
        Session.getInstance().logout();
    }
    
    public User getUserByEmail(String email) {
        return users.get(email);
    }
}
