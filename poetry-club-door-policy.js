/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  return line[0];
}
/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
  const firstOne = word[0].toUpperCase();
  const secondOracion = word.toLowerCase();
  const wordComplete = secondOracion.slice(1);
  
  const oracionComplete = firstOne + wordComplete;
  
  return oracionComplete;
}
/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  const cleanLine = line.trim();
  return cleanLine[cleanLine.length - 1];
}
/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  return word[0].toUpperCase() + word.toLowerCase().slice(1) + ", please";
}
