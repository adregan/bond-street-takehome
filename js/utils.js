/* isValidRoutingNumber :  String -> Boolean
 * Determines if a routing number (given as a string of numbers) is valid.
 */
export const isValidRoutingNumber = (routingNumber) => {
  const rn = routingNumber.split('').map(num => parseInt(num));
  const total = (
    (3 * (rn[0] + rn[3] + rn[6])) +
    (7 * (rn[1] + rn[4] + rn[7])) +
    (rn[2] + rn[5] + rn[8])
  );
  return total % 10 === 0;
};
