package com.est.attendance.services;

import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;
import java.io.IOException;

public class NavigationService {
    private static NavigationService instance;
    private Stage primaryStage;
    
    private NavigationService() {
    }
    
    public static NavigationService getInstance() {
        if (instance == null) {
            instance = new NavigationService();
        }
        return instance;
    }
    
    public void setPrimaryStage(Stage stage) {
        this.primaryStage = stage;
    }
    
    public void navigateTo(String fxmlFile) {
        try {
            // Remove leading slash if present
            String path = fxmlFile;
            if (path.startsWith("/")) {
                path = path.substring(1);
            }
            
            // Add .fxml extension if not present
            if (!path.endsWith(".fxml")) {
                path = path + ".fxml";
            }
            
            FXMLLoader loader = new FXMLLoader(getClass().getResource("/fxml/" + path));
            Scene scene = new Scene(loader.load(), 1024, 768);
            
            String css = getClass().getResource("/styles/styles.css").toExternalForm();
            scene.getStylesheets().add(css);
            
            primaryStage.setScene(scene);
        } catch (IOException e) {
            e.printStackTrace();
            System.err.println("Failed to load FXML file: " + fxmlFile);
        }
    }
    
    public Stage getPrimaryStage() {
        return primaryStage;
    }
}
