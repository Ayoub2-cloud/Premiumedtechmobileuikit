package com.est.attendance.controllers;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.ListView;
import javafx.scene.layout.VBox;
import com.est.attendance.models.User;
import com.est.attendance.models.Session;
import com.est.attendance.models.Course;
import com.est.attendance.services.DataService;
import com.est.attendance.services.NavigationService;
import java.util.List;

public class DashboardController {
    @FXML
    private Label welcomeLabel;
    @FXML
    private ListView<String> coursesListView;
    @FXML
    private VBox dashboardContainer;

    private DataService dataService;

    @FXML
    public void initialize() {
        dataService = DataService.getInstance();
        loadDashboard();
    }

    private void loadDashboard() {
        User currentUser = Session.getInstance().getCurrentUser();
        if (currentUser != null) {
            welcomeLabel.setText("Welcome, " + currentUser.getName());
            loadCourses();
        }
    }

    private void loadCourses() {
        List<Course> courses = dataService.getAllCourses();
        for (Course course : courses) {
            coursesListView.getItems().add(course.getCourseName() + " - " + course.getInstructor());
        }
    }

    @FXML
    private void handleCourseDetails() {
        NavigationService.getInstance().navigateTo("/fxml/CourseDetailsScreen.fxml");
    }

    @FXML
    private void handleViewAttendance() {
        NavigationService.getInstance().navigateTo("/fxml/AttendanceHistoryScreen.fxml");
    }

    @FXML
    private void handleViewProfile() {
        NavigationService.getInstance().navigateTo("/fxml/ProfileScreen.fxml");
    }

    @FXML
    private void handleLogout() {
        Session.getInstance().logout();
        NavigationService.getInstance().navigateTo("/fxml/LoginScreen.fxml");
    }
}
