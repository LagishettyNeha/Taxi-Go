// // src/utils/generateSessionToken.js
// import { v4 as uuidv4 } from 'uuid';

// export const generateSessionToken = () => {
//     return `session_token=${uuidv4()}`;
// };

// token.js
const { v4: uuidv4 } = require('uuid');

const generateSessionToken = () => {
    return `session_token=${uuidv4()}`;
};

module.exports = generateSessionToken;
