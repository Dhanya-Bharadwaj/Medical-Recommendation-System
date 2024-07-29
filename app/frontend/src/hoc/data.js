import FUNCTION from "../functions";

function displayData(symptoms) {
  FUNCTION.GET(symptoms)
    .then((data) => {
      document.getElementById("disease").innerText = `Disease: ${data.Disease}`;
      document.getElementById(
        "description"
      ).innerText = `Description: ${data.Description}`;
      document.getElementById(
        "precautions"
      ).innerText = `Precautions: ${data.Precautions}`;
      document.getElementById(
        "medication"
      ).innerText = `Medication: ${data.Medication}`;
      document.getElementById("diet").innerText = `Diet: ${data.Diet}`;
      document.getElementById("workout").innerText = `Workout: ${data.Workout}`;
    })
    .catch((error) => {
      console.error("Error displaying data:", error);
    });
}

export default displayData;
