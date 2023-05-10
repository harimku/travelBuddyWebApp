import React, { useEffect, useState } from "react";
import "../../App.css";
import { Empty } from 'antd';
import ItemCard from "../Card/ItemCard";
import SearchFilter from "../Header/SearchFilter";

export default function Home({ searchResults, setItemData }) {
  const [currentTab, setCurrentTab] = useState("visit");
  const [filteredRes, setFilteredRes] = useState();

  // update filtered result whenever tab changes or new search
  useEffect(() => {
    switch (currentTab) {
      case "visit":
        setFilteredRes(searchResults["visit"]);
        break;
      case "eat":
        setFilteredRes(searchResults["eat"]);
        break;
      case "activities":
        setFilteredRes(searchResults["activities"]);
        break;
      case "hotels":
        setFilteredRes(searchResults["hotels"]);
        break;
      default:
        break;
    }
  }, [currentTab, searchResults]);

  return (
    <div>
      <SearchFilter updateTab={setCurrentTab} />

      {/* Display filtered data */}
      {filteredRes ? (
        filteredRes.length !== 0 ? (
          filteredRes.map((data) => (
            <ItemCard key={data.id} data={data} setItemData={setItemData} />
          ))
        ) : (
          <div>
            <Empty
              style={{ paddingTop: "5em" }}
              description={
                <span>
                  Data Not Found
                </span>
              }
            />
          </div>
        )
      ) : (
        <div>Error</div>
      )}
    </div>
  );
}
