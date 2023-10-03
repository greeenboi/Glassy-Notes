// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager, Window};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust and SuvanGS the creator!", name)
}

#[tauri::command]
async fn close_splashscreen(window: Window) {
    if let Some(splashscreen) = window.get_window("splashscreen") {
      splashscreen.close().unwrap();
    }
    // window.get_window("splashscreen").expect("no window labeled 'splashscreen' found").close().unwrap();
   
    window.get_window("main").expect("no window labeled 'main' found").show().unwrap();
  }


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, close_splashscreen])
        .setup(|app| {
          let splashscreen_window = app.get_window("splashscreen").unwrap();
          let main_window = app.get_window("main").unwrap();
          
          tauri::async_runtime::spawn(async move {
            
            println!("Initializing...");
            std::thread::sleep(std::time::Duration::from_secs(5));
            println!("Done initializing.");
    
            
            splashscreen_window.close().unwrap();
            main_window.show().unwrap();
          });
          Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
