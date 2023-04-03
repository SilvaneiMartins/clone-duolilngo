declare module '*.png';

declare module '*.svg';

declare module '*.jpeg';
declare module '*.gif';

declare module 'rn-range-slider';

declare module '*.json' {
    const value: any;
    export default value;
}

/**
 * Declaração button Radial- Gradient;
*/
declare module 'react-native-radial-gradient';

/**
 * Declaração Dotenv;
*/
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

/**
 * Declaração button swipeable;
*/
declare module 'react-native-swipeable';

/**
 * Declaração SearchableDropdown;
*/
declare module 'itkitchen-react-native-ui-lib';

/**
 *
 */
type SpecIcon = 'gas' | 'eletric' | 'bio' | 'gear' | undefined;

/**
 * Declare module referente a variavel de ambiente;
 */
declare module '@env' {
    export const SECRET_KEY: string;
}
