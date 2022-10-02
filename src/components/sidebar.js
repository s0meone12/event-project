import { countries, country, event_data } from "../data/event_data";
import CountryTile from "./country_tile";

const Sidebar = ({ changeCountry,selectedCountry }) => {
  return (
    <div className="sidebar">
      {countries.map((country,index) => {
        const eventCount = event_data.reduce((total, event) => {
          if (event.country_name == country) {
            return total + 1;
          } else {
            return total;
          }
        }, 0);
        return (
          <CountryTile
          key={index}
            name={country}
            changeCountry={() => {
              changeCountry(country);
            }}
            eventCount={eventCount}
            isSelected={selectedCountry==country}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
