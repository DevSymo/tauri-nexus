use reqwest;
use serde_json::Value;

static BASE_URL: &str = "https://api.henrikdev.xyz/valorant";

pub async fn get_account_rik(name: &str, tag: &str) -> Result<Value, reqwest::Error> {
    let url = format!("{}/v1/account/{}/{}", BASE_URL, name, tag);
    let response = reqwest::get(&url).await?.json().await?;
    Ok(response)
}

// Future function for another endpoint
pub async fn get_mmr_rik(affinity: &str, name: &str, tag: &str) -> Result<Value, reqwest::Error> {
    let url = format!("{}/v2/mmr/{}/{}/{}", BASE_URL, affinity, name, tag);
    let response = reqwest::get(&url).await?.json().await?;
    Ok(response)
}