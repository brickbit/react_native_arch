import { Image } from "react-native"

export const getAssetImage = (name: string) => {
    switch(name) {
        case 'amsterdam': {
            return require('./amsterdam.jpg');
        }
        case 'athens': {
            return require('./athens.jpg');
        }
        case 'barcelona': {
            return require('./barcelona.jpg');
        }
        case 'berlin': {
            return require('./berlin.jpg');
        }
        case 'dublin': {
            return require('./dublin.jpg');
        }
        case 'lisbon': {
            return require('./lisbon.jpg');
        }
        case 'london': {
            return require('./london.jpg');
        }
        case 'paris': {
            return require('./paris.jpg');
        }
        case 'rome': {
            return require('./rome.jpg');
        }
        case 'tokyo': {
            return require('./tokyo.jpeg');
        }
        default: return require('./tokyo.jpeg');
    }
}