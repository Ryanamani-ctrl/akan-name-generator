document.getElementById("Akanform").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("personName").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.getElementById("gender").value;
  const result = document.getElementById("result");

  
  if (!birthdate) {
    result.textContent = "Please select your birth date.";
    return;
  }

  if (!gender) {
    result.textContent = "Please select your gender.";
    return;
  }

  const date = new Date(birthdate + "T00:00:00");

  if (isNaN(date.getTime())) {
    result.textContent = "Invalid date.";
    return;
  }
  const dayIndex = date.getDay();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const akanNames = {
    male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
    female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
  };

  const dayName = days[dayIndex];
  const akanName = akanNames[gender][dayIndex];
  
  result.innerHTML = `
    Hey <strong>${name}</strong> 👋<br>
    You were born on <strong>${dayName}</strong>.<br>
    Your Akan name is <strong>${akanName}</strong>.
  `;
});