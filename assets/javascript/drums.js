function drum_key(key_val){
    switch (key_val){
        case 65:
            console.log("A");
            var audio = new Audio("./assets/drum_sounds/clap.wav");
            audio.play();
            break;
        case 83:
            var audio = new Audio("./assets/drum_sounds/hihat.wav");
            audio.play();
            break;
        case 68:
            var audio = new Audio("./assets/drum_sounds/kick.wav");
            audio.play();
            break;
        case 70:
            var audio = new Audio("./assets/drum_sounds/openhat.wav");
            audio.play();
            break;
        case 71:
            var audio = new Audio("./assets/drum_sounds/boom.wav");
            audio.play();
            break;
        case 72:
            var audio = new Audio("./assets/drum_sounds/ride.wav");
            audio.play();
            break;
        case 74:
            var audio = new Audio("./assets/drum_sounds/snare.wav");
            audio.play();
            break;
        case 75:
            var audio = new Audio("./assets/drum_sounds/tom.wav");
            audio.play();
            break;
        case 76:
            var audio = new Audio("./assets/drum_sounds/tink.wav");
            audio.play();
            break;
    }
}