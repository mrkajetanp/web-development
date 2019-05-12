var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var ResponseX;
(function (ResponseX) {
    ResponseX[ResponseX["No"] = 0] = "No";
    ResponseX[ResponseX["Yes"] = 1] = "Yes";
})(ResponseX || (ResponseX = {}));
function respond(recipient, message) {
}
respond("Princess Caroline", ResponseX.Yes);
