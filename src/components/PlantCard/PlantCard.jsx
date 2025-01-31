import { Card } from "antd";
import { Image } from "antd";
import styles from "./PlantCard.module.css";

function PlantCard({ plants }) {
  return (
    <div className={styles.cardContainer}>
      {plants.length > 0 ? (
        plants.map((plant) => (
          <Card key={plant.id} className={styles.card}>
            <h2 className={styles.heading}>{plant.common_name}</h2>
            <Image width={300} src={plant.url} />
            <p>
              <strong>Scientific Name:</strong> {plant.scientific_name}
            </p>
            <p>
              <strong>Sunlight:</strong>{" "}
              {plant.sunlight === "full_sun" ? "☀️ Full Sun" : plant.sunlight === "full_shade" ? "⚫️ Full Shade" : "🌓 Part Shade" }
            </p>
            <p>
              <strong>Watering:</strong> {plant.watering === "frequent" ? "Frequent" : "Average"}
            </p>
            <p>
              <strong>Hardiness:</strong> {plant.hardiness === "zone 3-10" ? "Zone 3-10" : "Zone 5-11"}
            </p>
            <p>
              <strong>Indoor/Outdoor:</strong> {plant.indoor ? "Indoor" : "Outdoor"}
            </p>
          </Card>
        ))
      ) : (
        <p>No plant data available.</p>
      )}
    </div>
  );
}

export default PlantCard;
