import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FUNCTION from "./functions";

function App() {
  // State to manage the symptoms, initially set to an empty string
  const [Symptoms, setSymptoms] = useState("");

  // Query to get the data from the user
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["GET_DATA"],
    queryFn: () =>
      FUNCTION["GET"]({
        Symptoms: Symptoms.split(",").map((symptom) => symptom.trim()),
      }),
    enabled: false,
  });

  // Function to handle the submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  // Rendering the UI
  return (
    <div>
      <h1>Medical Recommendation System</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={Symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="Enter Symptoms (separated by commas)"
        />
        <button type="submit">Submit</button>
      </form>
      {/* Display loading state */}
      {isLoading && <div>Loading...</div>}
      {/* Display error message */}
      {isError && <div>Error: {isError.message}</div>}
      {/* Display fetched data */}
      {data && (
        <div>
          <div id="disease">Disease: {data.Disease}</div>
          <div id="description">Description: {data.Description}</div>
          <div id="precautions">Precautions: {data.Precautions}</div>
          <div id="medication">Medication: {data.Medication}</div>
          <div id="diet">Diet: {data.Diet}</div>
          <div id="workout">Workout: {data.Workout}</div>
        </div>
      )}
    </div>
  );
}

export default App;
