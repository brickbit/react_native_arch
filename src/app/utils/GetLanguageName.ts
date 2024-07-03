

export const getLanguageName = (language?: string) => {
    switch(language) {
         case 'nl':  {
             return 'dutch'
         }
         case 'gr': {
             return 'greek'
         }
         case 'es': {
             return 'spanish'
         }
         case 'en': {
             return 'english'
         }
         case 'pt': {
             return 'portuguese'
         }
         case 'fr': {
            return 'french'
        }
        case 'it': {
            return 'italian'
        }
        case 'jp': {
            return 'japanese'
        }
        default: {
             return 'unknown language'
         }
    }
 }