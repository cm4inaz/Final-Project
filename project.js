// Function to generate the meal plan
function generateMealPlan() {
    const form = document.getElementById("mealPlanForm");

    // Validate email input
    const email = form.elements.email.value;
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Get user inputs for personal information and meal plan
    const name = form.elements.name.value;
    const goal = form.elements.goal.value;

    const meals = [];
    for (let i = 0; i < 7; i++) {
        const day = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"][i];
        const breakfast = form.elements[`${day}Breakfast`].value;
        const snack1 = form.elements[`${day}Snack1`].value;
        const lunch = form.elements[`${day}Lunch`].value;
        const snack2 = form.elements[`${day}Snack2`].value;
        const dinner = form.elements[`${day}Dinner`].value;

        meals.push({
            day,
            breakfast,
            snack1,
            lunch,
            snack2,
            dinner
        });
    }

    // Generate new web page with meal plan
    let newPageContent = `<html><head><title>Weekly Meal Plan</title></head><body>`;
    newPageContent += `<h1>Weekly Meal Plan for ${name}</h1>`;
    newPageContent += `<p>Email: ${email}</p>`;
    newPageContent += `<p>Goal for the week: ${goal}</p>`;
    newPageContent += `<table border="1">`;
    newPageContent += `<tr><th>Day</th><th>Breakfast</th><th>Snack</th><th>Lunch</th><th>Snack</th><th>Dinner</th></tr>`;

    meals.forEach((meal) => {
        newPageContent += `<tr>`;
        newPageContent += `<td>${meal.day.charAt(0).toUpperCase() + meal.day.slice(1)}</td>`;
        newPageContent += `<td>${meal.breakfast}</td>`;
        newPageContent += `<td>${meal.snack1}</td>`;
        newPageContent += `<td>${meal.lunch}</td>`;
        newPageContent += `<td>${meal.snack2}</td>`;
        newPageContent += `<td>${meal.dinner}</td>`;
        newPageContent += `</tr>`;
    });

    newPageContent += `</table></body></html>`;

    // Create new window and write the content
    const newWindow = window.open("");
    newWindow.document.write(newPageContent);
    newWindow.document.close();
}

// Function to validate email address
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to clear the form
function clearForm() {
    document.getElementById("mealPlanForm").reset();
}

// Function to print the meal plan
function printPlan() {
    window.print();
}
