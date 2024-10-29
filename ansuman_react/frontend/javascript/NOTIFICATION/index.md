# Notification Popup with Timeout

This file demonstrates how to create a notification popup that appears when a button is clicked and disappears after 5 seconds using JavaScript.

## HTML

```html
<!-- HTML structure for the button and notification popup -->
<button id="notifyBtn">Show Notification</button>

<div id="notification" class="popup">
  <p>This is a notification!</p>
  <span id="closeBtn">&times;</span> <!-- Close button -->
</div>
