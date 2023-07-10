// Get DOM elements
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');

// Event listener for user input
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

// Function to send user message
function sendMessage() {
  const userMessage = userInput.value;
  displayMessage(userMessage, 'user');
  // Process the user message and generate a response
  const botResponse = generateBotResponse(userMessage);
  displayMessage(botResponse, 'bot');
  userInput.value = '';
  scrollToBottom();
}

// Function to display a message in the chat container
function displayMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.innerText = message;
  chatMessages.appendChild(messageElement);
}

// Function to generate a bot response (dummy implementation)
function generateBotResponse(userMessage) {
  // Replace this with your logic to generate bot responses
  return 'This is a bot response.';
}

// Function to scroll to the bottom of the chat container
function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
