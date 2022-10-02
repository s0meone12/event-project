const CountryTile = ({ name, changeCountry, eventCount, isSelected }) => {
  return (
    <div
      onClick={changeCountry}
      className={` ${isSelected ? "selected_country_tile" : "country_tile"}`}
    >
      {name} ({eventCount})
    </div>
  );
};

export default CountryTile;
