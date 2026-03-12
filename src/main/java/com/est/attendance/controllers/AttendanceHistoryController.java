package com.est.attendance.controllers;

import javafx.fxml.FXML;
import javafx.scene.control.TableView;
import javafx.scene.control.TableColumn;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.scene.control.Label;
import com.est.attendance.services.NavigationService;

public class AttendanceHistoryController {
    @FXML
    private TableView<?> attendanceTable;
    @FXML
    private TableColumn<?, ?> dateColumn;
    @FXML
    private TableColumn<?, ?> statusColumn;
    @FXML
    private Label attendancePercentageLabel;

    @FXML
    public void initialize() {
        loadAttendanceData();
    }

    private void loadAttendanceData() {
        attendancePercentageLabel.setText("Attendance: 85%");
    }

    @FXML
    private void handleBack() {
        NavigationService.getInstance().navigateTo("/fxml/StudentDashboard.fxml");
    }
}
