/* Write a program for multi-layer discount price calculation.
1. if ticket number is less than 100p, per ticket price: 100tk.
2. if ticket number is more than 100p but less than 200p, first 100p per ticket price: 100tk and rest per ticket price: 90tk.
3. if ticket number is more than 100p but less than 200p, first 100p per ticket price: 100tk and 101p to 200p per ticket price: 90tk and more than 200p per ticket price: 70tk
*/
function ticketPrice(quantity) {
  const first100PerTicketPrice = 100;
  const second100PerTicketPrice = 90;
  const third100PerTicketPrice = 70;
  if (quantity <= 100) {
    const price = quantity * first100PerTicketPrice;
    return price;
  } else if (quantity <= 200) {
    const first100TicketPrice = 100 * first100PerTicketPrice;
    const restTicketPrice = (quantity - 100) * second100PerTicketPrice;
    const totalPrice = first100TicketPrice + restTicketPrice;
    return totalPrice;
  } else {
    const first100TicketPrice = 100 * first100PerTicketPrice;
    const second100TicketPrice = 100 * second100PerTicketPrice;
    const restTicketPrice = (quantity - 200) * third100PerTicketPrice;
    const totalPrice =
      first100TicketPrice + second100TicketPrice + restTicketPrice;
    return totalPrice;
  }
}
const ticketQuantity = 220;
const totalCost = ticketPrice(ticketQuantity);
console.log(totalCost);
