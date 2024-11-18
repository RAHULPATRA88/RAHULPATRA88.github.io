// Get the terminal element
const terminal = document.getElementById('terminal');

// List of terminal messages
const terminalMessages = [
  "Initializing...",
  "Loading modules...",
  "Connecting to server...",
  "Server connection established.",
  "Decrypting data...",
  "Data decrypted successfully.",
  "Process complete!"
];

// Function to simulate typing animation
function typeMessage(message, delay) {
  return new Promise((resolve) => {
    let currentMessage = '';
    let i = 0;
    const interval = setInterval(() => {
      if (i < message.length) {
        currentMessage += message[i];
        terminal.textContent = `${terminal.textContent}\n${currentMessage}`; // Update terminal
        terminal.scrollTop = terminal.scrollHeight; // Scroll to bottom
        i++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, delay);
  });
}

// Function to simulate terminal messages
async function simulateTerminal() {
  for (let message of terminalMessages) {
    await typeMessage(message, 100); // Type each message with a delay of 100ms per character
    await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for 500ms between messages
  }
}

// Start the simulation
simulateTerminal();
