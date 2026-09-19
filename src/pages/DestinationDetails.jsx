import { useParams } from "react-router-dom";

export default function DestinationDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Destination Details</h1>
      <p>Destination ID: {id}</p>
    </div>
  );
}
