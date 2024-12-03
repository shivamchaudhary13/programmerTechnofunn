import { useEffect, useState } from "react";
import { NavbarScreen } from "../Navbar/Navbar";
import "../OnlineTests/OnlineTest.scss";
import axios from "axios";
import { Button } from "react-bootstrap";
import API from "../../apiManager/endPoints";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgress from '@mui/material/CircularProgress';
import constants from "../../utils/constants";

export const HtmlOnlineTest = () => {
  const username = JSON.parse(localStorage.getItem("user"));
  const [selectedValue, setSelectedValue] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [loader, setLoader] = useState(false);
  const Navigate = useNavigate();

  useEffect(() => {
    if (selectedValue) {
      axios
        .get(`${API.GET_QUESTION}/${"HTML"}/${selectedValue}`)
        .then((response) => {
          setQuestion(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedValue]);

  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  const finalScore = () => {
    setLoader(true);
    setTimeout(() => {
      Navigate("/certificate", {
        state: {
          name: username.user.firstName + " " + username.user.lastName,
          course: "HTML",
        },
      });
    }, 10000);
  };
  const handleAnswerChange = (questionIndex, selectedValue) => {
    setAnswer({ ...answer, [questionIndex]: selectedValue });

    if (
      question[questionIndex] &&
      question[questionIndex].answer === selectedValue
    ) {
      setScore(score + 1);
    }
  };
  return (
    <div className="onlinetest">
      <NavbarScreen></NavbarScreen>
      <ArrowBackIcon sx={{ margin: "5vh 0 0 4vw" }} onClick={() => Navigate(-1)}/>
      <h1>{constants.htmlOnlineTest}</h1>
      <div className="test">
        <h3>{constants.selectALevel}:</h3>
        <select onChange={handleSelectChange} value={selectedValue}>
          <option value="">{constants.selectAnOption}</option>
          <option value="Basic">{constants.basic}</option>
          <option value="advanced">{constants.advanced}</option>
        </select>
      </div>
      <div className="questions">
        {question
          ? question.map((data, index) => (
              <div>
                <div key={index}>
                  <div className="question">
                    <p>{index + 1}</p>
                    <p>{data.questions}</p>
                  </div>
                  <input
                    type="radio"
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    value="True"
                    name={`answer${index}`}
                  />
                  True
                  <input
                    type="radio"
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    value="False"
                    name={`answer${index}`}
                  />
                  False
                  {/* {answer[index] !== undefined ? (
                    data.answer === answer[index] ? (
                      <div>
                        <p>Correct answer</p>
                        {() => setScore(score + 1)}
                      </div>
                    ) : (
                      <p>Wrong answer</p>
                    )
                  ) : (
                    ""
                  )} */}
                </div>
                <div className="submitButton">
                  <Button onClick={finalScore}>{constants.submit}</Button>
                </div>
              </div>
            ))
          : ""}
      </div>
      {loader ? <CircularProgress size={120} thickness={1.5} className="loading" color="inherit" /> : ''}
    </div>
  );
};
