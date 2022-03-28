// User should be able to add/create new meetups
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export const AddMeetup = () => {
  const [meetUpData, setMeetUpData] = useState({
    title: "",
    location: "",
    date: "",
    time: "",
    theme: "",
    description: "",
    image: "https://images.unsplash.com/photo",
  });

  const handleChange = (event) => {
    const { className, value } = event.target;
    setMeetUpData({ ...meetUpData, [className]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/meetups", meetUpData).then(() => {
      alert("meet up added");
      console.log("meetUpData", meetUpData);
    });
  };
  return (
    <div className="addMeetupContainer">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>Add Meetup</h1>
        <label>title</label>
        <input
          type="text"
          className="title"
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
        <label>Location</label>
        <select
          value={meetUpData.location}
          className="location"
          onChange={(event) => {
            handleChange(event);
          }}
        >
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          className="date"
          onChange={(event) => {
            handleChange(event);
          }}
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          className="time"
          onChange={(event) => {
            handleChange(event);
          }}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select
          value={meetUpData.theme}
          className="theme"
          onChange={(event) => {
            handleChange(event);
          }}
        >
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          className="description"
          onChange={(event) => {
            handleChange(event);
          }}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          className="image"
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
        <br />
        <input className="submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};
