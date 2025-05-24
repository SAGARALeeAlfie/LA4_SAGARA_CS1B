// Starting queue
let queue = ["Nicolas", "lester", "Aarume", "Lee", "Vardey"];

// Show current queue
console.log("Current Queue:");
for (let i = 0; i < queue.length; i++) {
  console.log((i + 1) + ". " + queue[i]);
}

// Customer enters their name
let name = prompt("Enter your name to join the queue:");
queue.push(name);
alert("Hello " + name + "! Your queue number is " + queue.length + ".");

// CSR enters number to service
let num = prompt("CSR: Enter the number to be serviced:");
num = parseInt(num);

// Check if valid number
if (num >= 1 && num <= queue.length) {
  alert("Now serving: " + queue[num - 1]);
  queue.splice(num - 1, 1); // remove the customer
} else {
  alert("Invalid number.");
}

// Show updated queue
console.log("Updated Queue:");
for (let i = 0; i < queue.length; i++) {
  console.log((i + 1) + ". " + queue[i]);
}
