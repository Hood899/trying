// Add all your JS here
document.getElementById("formP").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  let userInput = document.getElementById("user").value;
  let isPalindrome = checkPalindrome(userInput);

  let resulta = document.getElementById("displayResult");
resulta.textContent = isPalindrome ? `${userInput}: is a palindrome` : `${userInput}: is not a palindrome.`;
});

function checkPalindrome(text) {
  const clean = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reverseStr = clean.split('').reverse().join('');

  return clean === reverseStr;
}