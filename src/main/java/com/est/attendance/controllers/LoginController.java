package com.est.attendance.controllers;

import javafx.fxml.FXML;
import javafx.scene.control.PasswordField;
import javafx.scene.control.TextField;
import javafx.scene.control.ComboBox;
import javafx.scene.control.Alert;
import javafx.scene.control.Alert.AlertType;
import com.est.attendance.services.AuthenticationService;
import com.est.attendance.services.NavigationService;

public class LoginController {
    @FXML
    private TextField emailField;
    @FXML
    private PasswordField passwordField;
    @FXML
    private ComboBox<String> roleComboBox;

    private AuthenticationService authService;

    @FXML
    public void initialize() {
        authService = AuthenticationService.getInstance();
        if (roleComboBox != null) {
            roleComboBox.getItems().addAll("STUDENT", "PROFESSOR", "ADMIN");
            roleComboBox.setValue("STUDENT");
        }
    }

    @FXML
    private void handleLogin() {
        String email = emailField.getText().trim();
        String password = passwordField.getText();

        if (email.isEmpty() || password.isEmpty()) {
            showAlert("Input Error", "Please fill in all fields");
            return;
        }

        try {
            authService.login(email, password);
            navigateToDashboard();
        } catch (Exception e) {
            showAlert("Login Failed", "Invalid email or password");
        }
    }

    private void navigateToDashboard() {
        NavigationService.getInstance().navigateTo("/fxml/StudentDashboard.fxml");
    }

    private void showAlert(String title, String message) {
        Alert alert = new Alert(AlertType.ERROR);
        alert.setTitle(title);
        alert.setHeaderText(null);
        alert.setContentText(message);
        alert.showAndWait();
    }
}
