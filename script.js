// Get DOM elements
const chatMessages = document.getElementById('chat-messages');
const historyList = document.getElementById('history-list');
const userInput = document.getElementById('user-input');

// Chat history array
const chatHistory = [];

// Event listener for user input
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

// Event listener for history list
historyList.addEventListener('click', (event) => {
  const index = parseInt(event.target.dataset.index);
  if (!isNaN(index) && index >= 0 && index < chatHistory.length) {
    userInput.value = chatHistory[index].message;
    userInput.focus();
  }
});

// Function to send user message
function sendMessage() {
  const userMessage = userInput.value;
  displayMessage(userMessage, 'user');
  // Process the user message and generate a response
  const botResponse = generateBotResponse(userMessage);
  displayMessage(botResponse, 'bot');
  // Add the user message to chat history
  chatHistory.push({ message: userMessage });
  userInput.value = '';
  scrollToBottom();
  updateHistoryList();
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

// Function to update the history list
function updateHistoryList() {
  historyList.innerHTML = '';
  chatHistory.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.innerText = item.message;
    listItem.dataset.index = index;
    historyList.appendChild(listItem);
  });
}

// Function to scroll to the bottom of the chat container
function scrollToBottom() {
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
