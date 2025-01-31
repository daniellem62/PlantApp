import React from "react";
import styles from "./SuggestedPlants.module.css";

function SuggestedPlants({ plants, onSelectPlant }) {
  // Get 5 random plants from the list
  const suggestedPlants = [...plants]
    .sort(() => Math.random() - 0.5) // Shuffle the array
    .slice(0, 5); // Select the first 5

    return (
        <div>
          <h2>Suggested Plants</h2>
          <ul className={styles.suggestedPlantItem}>
            {suggestedPlants.map((plant) => (
              <li key={plant.id}>
                <button 
                  onClick={() => onSelectPlant(plant)} className={styles.button}> {/* Call onSelectPlant with the selected plant */}
                  {plant.common_name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

export default SuggestedPlants;