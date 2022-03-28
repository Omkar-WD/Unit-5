import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export const LoginSignUp = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    password: "",
    location: "",
    interests: [],
    image: "",
    subscribed: [], //these have to be ids of the subscribed meetups
  });

  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleLoginChange = (e) => {
    const { className, value } = e.target;
    setLoginData({
      ...loginData,
      [className]: value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let arr;
    axios.get("http://localhost:8080/users").then(({ data }) => {
      arr = data;
      let flag = false;
      arr = arr.filter((user, i) => {
        if (
          loginData.name === user.name &&
          loginData.password === user.password
        ) {
          flag = true;
          return user;
        }
      });
      if (flag == true) {
        console.log("login-User", arr);
        localStorage.setItem("userLoginDetails", JSON.stringify(arr));
        dispatch(arr);
      } else {
        alert("Check name or password");
      }
    });
  };

  const handleChange = (e) => {
    const { className, value } = e.target;
    let arr = signupData.interests;
    if (
      className == "technology" ||
      className == "food" ||
      className == "movies" ||
      className == "culture" ||
      className == "art" ||
      className == "drama"
    ) {
      arr.push(className);
      setSignupData({
        ...signupData,
        interests: arr,
      });
    } else {
      setSignupData({
        ...signupData,
        [className]: value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/users", signupData).then(({ data }) => {
      alert("added");
    });
    console.log("submit", signupData);
  };
  return (
    <div className="loginSignUp">
      <form
        className="signUp"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
        <br />
        <select
          value={signupData.location}
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
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className="technology"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <label>food</label>
        <input
          type="checkbox"
          className="food"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <label>movies</label>
        <input
          type="checkbox"
          className="movies"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <label>culture</label>
        <input
          type="checkbox"
          className="culture"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <label>art</label>
        <input
          type="checkbox"
          className="art"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <label>drama</label>
        <input
          type="checkbox"
          className="drama"
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <br />
        <label>image</label>
        <input
          type="text"
          className="image"
          onChange={(event) => {
            handleChange(event);
          }}
          required
        />
        <br />
        <input type="submit" className="submitSignUpForm" />
      </form>
      <form
        className="login"
        onSubmit={(e) => {
          handleLoginSubmit(e);
        }}
      >
        <h1>Login</h1>
        <label>name</label>
        <input
          type="text"
          className="name"
          onChange={(event) => {
            handleLoginChange(event);
          }}
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className="password"
          onChange={(event) => {
            handleLoginChange(event);
          }}
          required
        />
        <br />
        <input type="submit" className="submitLoginForm" />
      </form>
    </div>
  );
};
