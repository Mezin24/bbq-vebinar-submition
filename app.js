const mainContentContainer = document.getElementById('main-content');
const form = document.getElementById('form-email');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const userInfo = new FormData(event.target);
  const userName = userInfo.get('firstName');
  const userEmail = userInfo.get('email');

  const updatedContent = `
      <h2>Congratulations, ${userName}!</h2>
      <p>You're on your way to becoming a BBQ Master!</p>
      <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmail}</p>
  `;

  mainContentContainer.innerHTML = updatedContent;
});
