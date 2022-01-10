import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css"; //main styled
import "react-date-range/dist/theme/default.css"; //theme style file
import { DateRangePicker } from "react-date-range";
import { People } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  function handleSelect(range) {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  }
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <People />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button onClick={() => navigate("/search")}>Search Aribnb</Button>
    </div>
  );
}
export default Search;
