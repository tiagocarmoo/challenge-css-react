import styles from './CarDetails.module.css'

export const CarDetails = ({ brand, km, color, newCar }) => {
    return (
        <div className={styles.container}>
            <div className={styles.car_card}>
                <h3>{brand}</h3>
                <p>Km: {km}</p>
                <p>Cor: {color}</p>
                {/* {km === 0 ? (<p className={styles.my_conditional}>Esse é um veículo novo!</p>) : null} */}
            </div>
        </div>
    )
}
