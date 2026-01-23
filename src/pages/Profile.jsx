import { useParams } from "react-router-dom";

function Profile() {
  const { user } = useParams();
  return <div className="p-2.5">Profile: {user}</div>;
}

export default Profile;
