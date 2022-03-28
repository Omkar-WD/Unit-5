// This is an event details page which has its own route
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Event = () => {
  const [event, setEvent] = useState({
    id: 1,
  });
  const [subscribe, setSubscribe] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8080/meetups/${id}`).then((res) => {
      setEvent(res.data);
    });
  }, []);

  const handleSubscripe = (val, id) => {
    let user = JSON.parse(localStorage.getItem("userLoginDetails"));
    axios
      .patch(`http://localhost:8080/users/${user.id}`, {
        subscribed: [...user.subscribed, id],
      })
      .then((res) => {
        setSubscribe(val);
        localStorage.setItem("userLoginDetails", JSON.stringify(res.data));
        alert("update");
      });
  };
  return (
    <div className="eventContainer">
      <table>
        <tbody>
          <tr>
            <td>
              <div className="title">{event.title}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="theme">{event.theme}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="description">{event.description}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="date">{event.date}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="time">{event.time}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="location">{event.location}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="image">
                <img src={event.image} alt="" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* only one of the buttons should be visible depending on the status of subcription
      Hint : use conditional rendering */}
      {subscribe == false ? (
        <button
          className="subscribe"
          onClick={() => {
            handleSubscripe(true, event.id);
          }}
        >
          Subscribe
        </button>
      ) : (
        <button
          className="unsubscribe"
          onClick={() => {
            handleSubscripe(false, event.id);
          }}
        >
          Unsubscribe
        </button>
      )}
    </div>
  );
};
