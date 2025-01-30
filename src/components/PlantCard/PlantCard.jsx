function PlantCard({ plants }) {
  const firstPlant = plants.length > 0 ? plants[0] : null;
  return (
    <div>
      <h1>PlantCard</h1>
      {firstPlant ? ( // If a first plant exists, display it
        <div key={firstPlant.id}>
          <h2>{firstPlant.common_name}</h2>
          <p>
            <strong>Scientific Name:</strong> {firstPlant.scientific_name}
          </p>
          <p>
            <strong>Sunlight:</strong> {firstPlant.sunlight}
          </p>
          <p>
            <strong>Watering:</strong> {firstPlant.watering}
          </p>
          <p>
            <strong>Hardiness:</strong> {firstPlant.hardiness}
          </p>
          <p>
            <strong>Indoor:</strong> {firstPlant.indoor ? "Yes" : "No"}
          </p>
        </div>
      ) : (
        <p>No plant data available.</p> // Fallback in case no plants are available
      )}
    </div>
  );
}
export default PlantCard;
