import { Card } from "antd";

function PlantCard({ plants }) {
  const firstPlant = plants.length > 0 ? plants[0] : null;
  return (
    <Card>
      {firstPlant ? ( // If a first plant exists, display it
        <div key={firstPlant.id}>
          <h2>{firstPlant.common_name}</h2>
          <p>
            <strong>Scientific Name:</strong> {firstPlant.scientific_name}
          </p>
          <p>
            <strong>Sunlight:</strong> { firstPlant.sunlight === "full_sun" ? "☀️ Full Sun" : "🌓 Part Shade"}
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
          {firstPlant.url && <img src={firstPlant.url} alt={firstPlant.common_name} />}
        </div>
      ) : (
        <p>No plant data available.</p> // Fallback in case no plants are available
      )}
    </Card>
  );
}
export default PlantCard;
