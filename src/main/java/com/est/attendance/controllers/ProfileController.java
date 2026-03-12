package com.est.attendance.controllers;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import com.est.attendance.models.User;
import com.est.attendance.models.Session;
import com.est.attendance.services.NavigationService;

public class ProfileController {
    @FXML
    private Label nameLabel;
    @FXML
    private TextField emailField;
    @FXML
    private TextField departmentField;
    @FXML
    private TextField semesterField;
    @FXML
    private TextField gpaField;

    @FXML
    public void initialize() {
        loadUserProfile();
    }

    private void loadUserProfile() {
        User currentUser = Session.getInstance().getCurrentUser();
        if (currentUser != null) {
            nameLabel.setText(currentUser.getName());
            emailField.setText(currentUser.getEmail());
            departmentField.setText(currentUser.getDepartment() != null ? currentUser.getDepartment() : "N/A");
            semesterField.setText(currentUser.getSemester() != null ? currentUser.getSemester() : "N/A");
            gpaField.setText(String.valueOf(currentUser.getGpa()));
            emailField.setEditable(false);
        }
    }

    @FXML
    private void handleBack() {
        NavigationService.getInstance().navigateTo("/fxml/StudentDashboard.fxml");
    }

    @FXML
    private void handleLogout() {
        Session.getInstance().logout();
        NavigationService.getInstance().navigateTo("/fxml/LoginScreen.fxml");
    }
}
