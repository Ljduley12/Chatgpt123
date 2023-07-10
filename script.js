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
  // Add the user message to chat history
  chatHistory.push({ message: userMessage });
  // Check if the user message contains a question
  const answer = getAnswer(userMessage);
  if (answer) {
    displayMessage(answer, 'bot');
  } else {
    displayMessage("Sorry, I don't have an answer for that.", 'bot');
  }
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

// Function to check if the user message contains a question and return the corresponding answer
function getAnswer(userMessage) {
  // Replace this with your logic to determine the answer based on the user message
  if (userMessage.toLowerCase().includes('what year is it')) {
    const currentYear = new Date().getFullYear();
    return `The current year is ${currentYear}.`;
  }
  return null;
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
