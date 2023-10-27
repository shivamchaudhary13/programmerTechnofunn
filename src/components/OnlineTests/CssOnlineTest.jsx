import { useEffect, useState } from "react";
import { NavbarScreen } from "../Navbar/Navbar";
import "../OnlineTests/OnlineTest.scss";
import axios from "axios";
import { Button } from "react-bootstrap";
export const CssOnlineTest = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (selectedValue) {
      axios
        .get(
          `http://localhost:3000/api/test/online-test?course=css&type=${selectedValue}`
        )
        .then((response) => {
          console.log(response);
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
    console.log("Selected Value:", newValue);
  };

  const finalScore = () => {
    setShowScore(true)
  }
  const handleAnswerChange = (questionIndex, selectedValue) => {
    setAnswer({ ...answer, [questionIndex]: selectedValue });

    if (
      question.result[questionIndex] &&
      question.result[questionIndex].answer === selectedValue
    ) {
      setScore(score + 1);
    }
  };
  return (
    <div className="onlinetest">
      <NavbarScreen></NavbarScreen>
      <h1>Online Test</h1>
      <div className="test">
        <h3>Select a level:</h3>
        <select onChange={handleSelectChange} value={selectedValue}>
          <option value="">Select an option</option>
          <option value="Basic">Basic</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>
      <div className="questions">
        {question.result
          ? question.result.map((data, index) => (
              <div>
                <div key={index}>
                <div className="question">
                  <p>{index + 1}</p>
                  <p>{data.questions}</p>
                  </div>
                  <input
                    type="radio"
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    value="true"
                    name={`answer${index}`}
                  />
                  True
                  <input
                    type="radio"
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    value="false"
                    name={`answer${index}`}
                  />
                  False
                  {answer[index] !== undefined ? (
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
                  )}
                </div>
                <div className="submitButton">
                  <Button onClick={finalScore}>Submit</Button>
                  {showScore ? <p>Your total score: {score}</p>: ''}
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};
