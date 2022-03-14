import "./AddHouse.css";
import { useState } from "react";
import axios from "axios";

export const AddHouse = () => {
  const [houseData, setHouseData] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    bachelor: "",
    married: "",
    image: "",
  });

  const handleChange = (e) => {
    const { className, value } = e.target;
    setHouseData({ ...houseData, [className]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/houses", houseData).then((res) => {
      console.log("House Added ", res.data);
    });
    setHouseData({
      name: "",
      ownerName: "",
      address: "",
      areaCode: "",
      rent: "",
      bachelor: "",
      married: "",
      image: "",
    });
  };
  return (
    <div className="addHouseContainer">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <label>name</label>
              </td>
              <td>
                <input
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="name"
                  value={houseData.name}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>ownerName</label>
              </td>
              <td>
                <input
                  value={houseData.ownerName}
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="ownerName"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>address</label>
              </td>
              <td>
                <input
                  value={houseData.address}
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="address"
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>areaCode</label>
              </td>
              <td>
                <input
                  value={houseData.areaCode}
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="areaCode"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>rent</label>
              </td>
              <td>
                <input
                  value={houseData.rent}
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="rent"
                  required
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>preferredTenant</label>
              </td>
            </tr>
            <tr>
              <td>
                <label>bachelor</label>
              </td>
              <td>
                <input
                  checked={houseData.bachelor}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="checkbox"
                  className="bachelor"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>married</label>
              </td>
              <td>
                <input
                  checked={houseData.married}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="checkbox"
                  className="married"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>image</label>
              </td>
              <td>
                <input
                  value={houseData.image}
                  type="text"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  className="image"
                  required
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input className="submitBtn" type="submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
