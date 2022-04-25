import "./HomePage.scss";
import { useDoctor } from "../../context/DoctorContext";

function HomePage() {
  const { doctors, isLoading } = useDoctor();
  console.log(doctors);

  return (
    <div>
      <h1>Doctors</h1>

      {isLoading && <div>Loading...</div>}

      {doctors.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default HomePage;
