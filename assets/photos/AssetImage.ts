import { Image } from "react-native"

export const getAssetImage = (name: string) => {
    switch(name) {
        case 'Amsterdam': {
            return require('./amsterdam.jpg');
        }
        case 'Athens': {
            return require('./athens.jpg');
        }
        case 'Barcelona': {
            return require('./barcelona.jpg');
        }
        case 'Berlin': {
            return require('./berlin.jpg');
        }
        case 'Dublin': {
            return require('./dublin.jpg');
        }
        case 'Lisbon': {
            return require('./lisbon.jpg');
        }
        case 'London': {
            return require('./london.jpg');
        }
        case 'Paris': {
            return require('./paris.jpg');
        }
        case 'Rome': {
            return require('./rome.jpg');
        }
        case 'Tokyo': {
            return require('./tokyo.jpeg');
        }
        case 'FCMLogo': {
            return require('./fcm_logo.png');
        }
        default: return require('./tokyo.jpeg');
    }
}