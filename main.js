function payment() {
  // Code to handle payment process (e.g., generate QR code and open in a new tab)
  // Replace with your implementation
  window.open('payment.html', '_blank');
}

function confirmPayment() {
  // Code to confirm payment and display the payment confirmation popup
  // Replace with your implementation
  document.getElementById('paymentConfirmation').classList.remove('hidden');
  setTimeout(function () {
    document.getElementById('paymentConfirmation').classList.add('hidden');
  }, 30000); // Hide the message after 3 seconds (adjust as needed)
}
