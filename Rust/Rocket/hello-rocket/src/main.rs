#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

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

fn main() {
    rocket::ignite().mount("/", routes![hello]).launch();
}


