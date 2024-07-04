
export const getErrorMessage = ({error}: any) => {
    switch(error) {
         case 'DEVICE_INCOMPATIBLE':  {
             return 'This feature is not available in your device';
         }
         case 'DEACTIVATED': {
             return 'Enable NFC in your device to continue';
         }
         case 'TAG_UNAVAILABLE': {
             return 'An error occurred while reading the NFC Tag';
         }
         case 'AUTH_ERROR': {
             return 'Your document could not be authenticated. Try again';
         }
         case 'READ_DATA_ERROR': {
             return 'An error occurred while reading the document information';
         }
         default: {
             return 'An unknown error ocurred';
         }
    }
 }