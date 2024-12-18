let data = "hje"+23;

switch (data) {
    case undefined:
        console.log("undefined!")
        break;
    case null:
        console.log("null!")
        break;
    case Number:
        console.log("number!")
        break;
    case NaN:
        console.log("not a number!")
        break;
    case String:
        console.log("string!")
        break;
    case Boolean:
        console.log("boolean!")
        break;
    case Function:
        console.log("funtion!")
        break;
    case Object:
        console.log("object!")
        break;
    case Array:
        console.log("array!")
        break;
    default:
        console.log("I have no idea!")
        break;
}