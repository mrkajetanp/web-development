#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

use rocket::request::Form;
use rocket::http::Cookies;

// Cookies

#[get("/cookies")]
fn get_cookies(cookies: Cookies) -> Option<String> {
    cookies.get("message")
        .map(|value| format!("Message: {}", value))
}

// Private cookies
#[get("/user_id")]
fn user_id(cookies: Cookies) -> Option<String> {
    cookies.get_private("user_id")
        .map(|cookie| format!("User ID: {}", cookie.value()))
}

// Redirect

#[get("/redirect")]
fn redirect() -> Redirect {
    Redirect::to("/login")
}

// Multiple segments

#[derive(FromForm)]
struct User {
    name: String,
    account: usize
}

#[get("/item?<id>&<user..>")]
fn item(id: usize, user: Form<User>) {
    // ...
}


#[get("/hello/<name>/<age>/<cool>")]
fn hello(name: String, age: u8, cool: bool) -> String {
    if cool {
        format!("You're a cool {} year old, {}!", age, name)
    } else {
        format!("{}, not very cool.", name)
    }
}

// Serving static files (the manual way)
#[get("/files/<file..>")]
fn files(file: PathBuf) -> Option<NamedFile> {
    NamedFile::open(Path::new("static/").join(file)).ok()
}

// Query strings
#[get("/queries?wave&<name>")]
fn queries(name: &RawStr) -> String {
    format!("Hello, {}!", name.as_str())
}

// Optional queries
#[get("/o/queries?wave&<name>")]
fn optional_queries(name: Option<&RawStr>) -> String {
    name.map(|name| format!("Hi, {}!", name))
        .unwrap_or_else(|| "Hello".into())
}

#[catch(404)]
fn not_found(req: &Request) -> String {
    "Not found.."
}

fn main() {
    rocket::ignite().mount("/", routes![hello])
        .register(catchers![not_found])
        .launch();
}


