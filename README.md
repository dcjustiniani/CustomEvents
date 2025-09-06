# CustomEvents
Create and dispatch your own events for modular apps.

For our Demo Code

How It Works

Run It: Save as index.html and app.js, then open index.html in a browser.
Add Task: Type a task (e.g., "Do laundry") and click "Add."
Result: The task appears in the list below (e.g., "Do laundry").
Custom Event: The form sends a taskAdded event with the task in detail, and the list listens for it to update.

Why It’s Simple

Minimal Code: Just one event, two components (form and list).
Clear detail Use: Passes the task text via detail: { task }.
Modular: Form and list don’t directly interact, only through the event.
Easy to Test: Works in any modern browser with no setup.
