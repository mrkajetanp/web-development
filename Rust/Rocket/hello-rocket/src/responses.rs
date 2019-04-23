#[macro_use] extern crate rocket;

use rocket::response::status;
use rocket::response::content;

#[post("/<id>")]
fn new(id: usize) -> status::Accepted<String> {
   status::Accepted(Some(format!("id: '{}'", id)))
}

#[get("/")]
fn json() -> content::Json<&'static str> {
    content::Json("{ 'hi': 'world' }")
}
