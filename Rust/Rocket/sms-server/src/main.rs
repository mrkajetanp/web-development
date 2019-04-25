#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

use serde::Deserialize;
use rocket_contrib::json::Json;

#[derive(Deserialize, Debug)]
struct Message {
    receiver: String,
    sender: String,
    text: String
}

#[post("/upload/sms", format = "json", data = "<message>")]
fn upload_sms(message: Json<Message>) -> String {
    println!("Message: {:?}", message);
    String::from("resultxx")
}

fn main() {
    rocket::ignite().mount("/", routes![upload_sms])
        .launch();
}
