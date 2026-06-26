// 1. Dynamic Greeting based on time of day
function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
}

// 2. Add an interactive element (e.g., a simple alert or console message)
window.onload = function() {
    const greeting = getGreeting();
    console.log(greeting + " Welcome to my portfolio!");
    
    // Optional: Log this to the page header if you add an ID="greeting" in HTML
    // document.getElementById("greeting").innerText = greeting;
};

// 3. Simple function to show an alert when a button is clicked
function contactMe() {
    alert("Thanks for reaching out! Feel free to email me at [your-email@example.com].");
}