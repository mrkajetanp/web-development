
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

enum ResponseX {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: ResponseX): void {
    // ..
}

respond("Princess Caroline", ResponseX.Yes);
