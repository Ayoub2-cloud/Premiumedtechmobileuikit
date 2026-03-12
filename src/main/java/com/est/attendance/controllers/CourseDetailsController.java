package com.est.attendance.controllers;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.ProgressBar;
import com.est.attendance.services.NavigationService;

public class CourseDetailsController {
    @FXML
    private Label courseNameLabel;
    @FXML
    private Label instructorLabel;
    @FXML
    private Label scheduleLabel;
    @FXML
    private ProgressBar attendanceProgressBar;
    @FXML
    private Label attendancePercentageLabel;

    @FXML
    public void initialize() {
        loadCourseDetails();
    }

    private void loadCourseDetails() {
        courseNameLabel.setText("Java Programming");
        instructorLabel.setText("Dr. Mohammed Bennani");
        scheduleLabel.setText("Monday 10:00-12:00 | Room 101");
        attendanceProgressBar.setProgress(0.85);
        attendancePercentageLabel.setText("85%");
    }

    @FXML
    private void handleBack() {
        NavigationService.getInstance().navigateTo("/fxml/StudentDashboard.fxml");
    }
}
