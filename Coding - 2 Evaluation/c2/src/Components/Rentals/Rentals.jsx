import "./Rentals.css";
import axios from "axios";
import { useState, useEffect } from "react";

export const Rentals = () => {
  const [allHouseData, setAllHouseData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/houses").then((res) => {
      setAllHouseData(res.data);
    });
    return () => {
      setAllHouseData([]);
    };
  }, []);

  const handleSortByID = () => {
    allHouseData.sort((a, b) => {
      if (a.id > b.id) return 1;
      return -1;
    });
    setAllHouseData([...allHouseData]);
  };

  const handleSortByRentAsc = () => {
    allHouseData.sort((a, b) => {
      if (a.rent > b.rent) return 1;
      return -1;
    });
    setAllHouseData([...allHouseData]);
  };

  const handleSortByRentDesc = () => {
    allHouseData.sort((a, b) => {
      if (a.rent > b.rent) return -1;
      return 1;
    });
    setAllHouseData([...allHouseData]);
  };

  const handleSortByAreaAsc = () => {
    allHouseData.sort((a, b) => {
      if (a.areaCode > b.areaCode) return 1;
      return -1;
    });
    setAllHouseData([...allHouseData]);
  };

  const handleSortByAreaDesc = () => {
    allHouseData.sort((a, b) => {
      if (a.areaCode > b.areaCode) return -1;
      return 1;
    });
    setAllHouseData([...allHouseData]);
  };

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button
          className="sortById"
          onClick={() => {
            handleSortByID();
          }}
        >
          Sort by ID
        </button>
        <button
          className="sortByRentAsc"
          onClick={() => {
            handleSortByRentAsc();
          }}
        >
          Rent Low to high
        </button>
        <button
          className="sortByRentDesc"
          onClick={() => {
            handleSortByRentDesc();
          }}
        >
          Rent High to low
        </button>
        <button
          className="sortByAreaAsc"
          onClick={() => {
            handleSortByAreaAsc();
          }}
        >
          Area Low to high
        </button>
        <button
          className="sortByAreaDesc"
          onClick={() => {
            handleSortByAreaDesc();
          }}
        >
          Area High to Low
        </button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {allHouseData.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.bachelor == "on" ? "Bachelors" : "Married"}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
