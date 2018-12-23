function drum_key(key_val){
    switch (key_val){
        case 65:
            console.log("A");
            var audio = new Audio("./assets/drum_sounds/clap.wav");
            audio.play();
            break;
        case 83:
            var audioa = new Audio("./assets/drum_sounds/hihat.wav");
            audioa.play();
            break;
        case 68:
            var audio = new Audio("./assets/drum_sounds/kick.wav");
            audio.play();
            break;
        case 70:
            break;
        case 71:
            break;
        case 72:
            break;
        case 74:
            break;
        case 75:
            break;
        case 76:
            break;
    }
}