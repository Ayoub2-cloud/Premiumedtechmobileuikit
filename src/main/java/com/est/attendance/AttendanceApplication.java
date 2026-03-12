package com.est.attendance;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.stage.Stage;
import com.est.attendance.controllers.LoginController;
import com.est.attendance.services.NavigationService;

import java.io.IOException;

public class AttendanceApplication extends Application {
    
    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage primaryStage) throws IOException {
        // Initialize navigation service
        NavigationService.getInstance().setPrimaryStage(primaryStage);
        
        // Load login screen
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/fxml/LoginScreen.fxml"));
        Scene scene = new Scene(loader.load(), 1024, 768);
        
        // Load stylesheet
        String css = getClass().getResource("/styles/styles.css").toExternalForm();
        scene.getStylesheets().add(css);
        
        primaryStage.setTitle("EST Smart Attendance System");
        primaryStage.setScene(scene);
        primaryStage.setWidth(1024);
        primaryStage.setHeight(768);
        primaryStage.setResizable(true);
        
        // Set icon if available
        try {
            Image icon = new Image(getClass().getResourceAsStream("/images/logo.png"));
            primaryStage.getIcons().add(icon);
        } catch (Exception e) {
            // Icon not available, continue without it
        }
        
        primaryStage.show();
    }
}
