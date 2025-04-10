import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    if (e.target.value) {
      navigate(e.target.value);
    }
  };

  return (
    <header id="top">
      <nav>
        <h1>
          <a href="#first">Sona - Maven of the Strings</a>
        </h1>

        <form className="dropdown-form">
          <select
            className="dropdown"
            name="page"
            onChange={handleSelectChange}
          >
            <option value="">Select a Champion</option>
            <option value="/lux">Lux</option>
            <option value="/seraphine">Seraphine</option>
            <option value="/yuumi">Yuumi</option>
          </select>
        </form>

        <ul>
          <li>
            <a href="#first">Passive</a>
          </li>
          <li>
            <a href="#second">Q</a>
          </li>
          <li>
            <a href="#third">W</a>
          </li>
          <li>
            <a href="#fourth">E</a>
          </li>
          <li>
            <a href="#fifth">R</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
