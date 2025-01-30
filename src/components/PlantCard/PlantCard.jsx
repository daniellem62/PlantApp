function PlantCard({ plants }) {
  return (
    <div>
      <h1>PlantCard</h1>
      {plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.common_name}</h2>
          <p>
            <strong>Scientific Name:</strong> {plant.scientific_name}
          </p>
          <p>
            <strong>Sunlight:</strong> {plant.sunlight}
          </p>
          <p>
            <strong>Watering:</strong> {plant.watering}
          </p>
          <p>
            <strong>Hardiness:</strong> {plant.hardiness}
          </p>
          <p>
            <strong>Indoor:</strong> {plant.indoor ? "Yes" : "No"}
          </p>
          <a href={plant.url} target="_blank" rel="noopener noreferrer">
            More Info
          </a>
        </div>
      ))}
    </div>
  );
}

export default PlantCard;
