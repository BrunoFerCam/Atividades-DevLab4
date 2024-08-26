import { Link } from "react-router-dom";

export default function Menu() {
    return <div>
        <Link to="/Morning">Morning</Link>
        <Link to="/Afternoon">Afternoon</Link>
        <Link to="/Night">Night</Link>
    </div>
}
