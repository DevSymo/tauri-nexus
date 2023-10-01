// Prevents additional console window on Windows in release
#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

mod valo_rik;

use serde_json::Value;

// Tauri commands for Valorant
#[tauri::command]
async fn get_account(name: String, tag: String) -> Result<Value, String> {
  match valo_rik::get_account_rik(&name, &tag).await {
      Ok(value) => Ok(value),
      Err(e) => Err(e.to_string()),
  }
}

#[tauri::command]
async fn get_mmr(affinity: String, name: String, tag: String) -> Result<Value, String> {
  match valo_rik::get_mmr_rik(&affinity, &name, &tag).await {
      Ok(value) => Ok(value),
      Err(e) => Err(e.to_string()),
  }
}

#[tauri::command]
async fn get_matches(affinity: String, puuid: String, size: i32) -> Result<Value, String> {
  match valo_rik::get_matches_rik(&affinity, &puuid, size).await {
      Ok(value) => Ok(value),
      Err(e) => Err(e.to_string()),
  }
}


// Main function
fn main() {
  tauri::Builder::default()
      // Register your Tauri commands here
      .invoke_handler(tauri::generate_handler![get_account, get_mmr, get_matches])
      .plugin(tauri_plugin_shell::init())
      .plugin(tauri_plugin_window::init())
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}
