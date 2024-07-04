import "./LoadingScreen.css";
import "boxicons";

function LoadingScreen() {
  return (
    <div className="loader-wrapper">
      <box-icon name="loader" animation="spin" size="md" color="white" />
    </div>
  );
}

export default LoadingScreen;
