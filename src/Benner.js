import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Benner.css";
import Search from "./Search";

function Benner() {
  const navigate = useNavigate();
  const [showSearch, setShowsearch] = useState(false);
  return (
    <div className="benner">
      <div className="benner_search">
        <Button
          onClick={() => setShowsearch(!showSearch)}
          variant="outlined"
          className="banner_button"
        >
          {showSearch ? "Hide" : " Search Date"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="benner_info">
        <h1>Get out and stretch your inagination</h1>
        <h5>
          Plan a different kind of getway to uncover the hidden gems near you
        </h5>
        <Button onClick={() => navigate("/search")} variant="outlined">
          Eplore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Benner;
