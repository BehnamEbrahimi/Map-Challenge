import { MarkerInfo } from "../types/MarkerInfo";
import "./Legend.css";

interface LegendProps {
  info: MarkerInfo;
}

const Legend: React.FC<LegendProps> = ({
  info: { name, type, population, wealth, authority, numGuards },
}) => {
  return (
    <ul className="legend">
      <li>
        Name: <span className="highlight">{name}</span>
      </li>
      <li>
        Type: <span className="highlight">{type}</span>
      </li>
      <li>
        Population: <span className="highlight">{population}</span>
      </li>
      <li>
        Wealth: <span className="highlight">{wealth}</span>
      </li>
      <li>
        Authority: <span className="highlight">{authority}</span>
      </li>
    </ul>
  );
};

export default Legend;
