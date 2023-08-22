import Image from "next/image";
import styles from "./VaccineCard.module.css";

const VaccineCard = ({
  imageUrl,
  title,
  effectiveness,
  dosing,
  possibleSideEffect,
}: any) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <Image
          src={imageUrl}
          alt="Product Image"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardText}>
        <h3>{title}</h3>

        <h5 style={{ display: "inline" }}>Effectiveness: </h5>
        <p style={{ display: "inline" }}>{effectiveness}</p>
        <br />
        <h5 style={{ display: "inline" }}>Dosing: </h5>
        <p style={{ display: "inline" }}>{dosing}</p>
        <br />
        <h5 style={{ display: "inline" }}>Possible side effects: </h5>
        <p style={{ display: "inline" }}>{possibleSideEffect}</p>
      </div>
    </div>
  );
};

export default VaccineCard;
