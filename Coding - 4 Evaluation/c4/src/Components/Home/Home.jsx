import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {
  const [events, setEvents] = useState([]);
  const [location, setLocation] = useState("");
  const [x, setX] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/users/1").then((res) => {
      setX(res.data.subscribed);
    });
  }, []);

  useEffect(() => {
    let b = [];
    for (let i = 0; i < x.length; i++) {
      axios.get(`http://localhost:8080/meetups/${x[i]}`).then((res) => {
        b.push(res.data);
      });
    }
    setArr(b);
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/meetups").then((res) => {
      setEvents(res.data);
    });
  }, [events]);

  return (
    <div className="homeContainer">
      {events
        .filter((el) => {
          if (location === el.location) return el;
        })
        .map((el) => {
          return (
            <Link to={`/meetup/${el.id}`} key={el.id} className="events">
              <table>
                <thead>
                  <tr>
                    <th>title</th>
                    <th>theme</th>
                    <th>description</th>
                    <th>date</th>
                    <th>time</th>
                    <th>location</th>
                    <th>image</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="title">{el.title}</div>
                    </td>
                    <td>
                      <div className="theme">{el.theme}</div>
                    </td>
                    <td>
                      <div className="description">{el.description}</div>
                    </td>
                    <td>
                      <div className="date">{el.date}</div>
                    </td>
                    <td>
                      <div className="time">{el.time}</div>
                    </td>
                    <td>
                      <div className="location">{el.location}</div>
                    </td>
                    <td>
                      <div className="image">
                        <img src={el.image} alt="" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Link>
          );
        })}

      <div className="subscribedData">
        <div>
          <select
            value={location} // add value here
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`/addmeetup`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {arr.map((el, i) => {
            return (
              <Link to={`/meetup/${el.id}`} key={i} className="events">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="title">{el.title}</div>
                      </td>
                      <td>
                        <div className="theme">{el.theme}</div>
                      </td>
                      <td>
                        <div className="description">{el.description}</div>
                      </td>
                      <td>
                        <div className="date">{el.date}</div>
                      </td>
                      <td>
                        <div className="time">{el.time}</div>
                      </td>
                      <td>
                        <div className="location">{el.location}</div>
                      </td>
                      <td>
                        <div className="image">
                          <img src={el.image} alt="" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
