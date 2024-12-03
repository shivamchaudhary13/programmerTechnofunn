import { useEffect, useState } from "react";
import { NavbarScreen } from "../Navbar/Navbar";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import API from "../../apiManager/endPoints";
import { ChangePasswordModal } from "../../Modal/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import constants from "../../utils/constants";

export const OnlineTestUpdate = () => {
  const navigation = useNavigate();
  const [response, setResponse] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({
    course: "",
    question: "",
    answer: "",
    level: "",
  });
  const [error, setErrors] = useState("");
  const handleInput = (val) => {
    setData({ ...data, [val.target.name]: val.target.value });
  };

  const submit = (val) => {
    val.preventDefault();
    if (validate) {
      axios
        .post(`${API.ADD_QUESTIONS}`, {
          course: data.course,
          question: data.question,
          answer: data.answer,
          level: data.level,
        })
        .then((response) => {
          setResponse(response);
          setShowModal(true);
        });
    }
  };
  let errors = {};
  const validate = () => {
    if (!data.course) {
      error.course = "Course is required";
    } else if (!data.question) {
      error.question = "Question is required";
    } else if (!data.answer) {
      error.answer = "Answer is required";
    } else if (!data.type) {
      error.type = "Type is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const cancel = () => {
    Navigate("/");
  };
  return (
    <div className="AdminOT">
      <NavbarScreen></NavbarScreen>
      <Button className="button" onClick={() => navigation("/updateTest")}>
        {constants.addQuestions}
      </Button>
      <Button
        className="button"
        onClick={() => navigation("/online-test-list")}
      >
        {constants.listOfQuestions}
      </Button>
      <div className="updateOnlineTest">
        <h1>{constants.addQUESTIONS}</h1>
        <form onSubmit={submit}>
          <br />
          <select name="course" value={data.course} onChange={handleInput}>
            <option value="" disabled selected>
              {constants.selectAnCourse}
            </option>
            <option value="HTML">{constants.html}</option>
            <option value="CSS">{constants.css}</option>
            <option value="JAVASCRIPT">{constants.js}</option>
            <option value="ANGULAR">{constants.angular}</option>
            <option value="REACT">{constants.react}</option>
            <option value="PHP">{constants.php}</option>
          </select>
          <br />
          {error.course && <span className="error">{error.course}</span>}
          <br />
          <select name="level" value={data.level} onChange={handleInput}>
            <option value="" disabled selected>
              {constants.selectALevel}
            </option>
            <option value="Basic">{constants.basic}</option>
            <option value="Intermediate">{constants.intermediate}</option>
            <option value="Advanced">{constants.advanced}</option>
          </select>
          <br />
          {error.level && <span className="error">{error.level}</span>}
          <br />
          <input
            type="text"
            placeholder="Enter the question"
            name="question"
            value={data.question}
            onChange={handleInput}
          />
          <br />
          {error.question && <span className="error">{error.question}</span>}
          <br />
          <select name="answer" value={data.answer} onChange={handleInput}>
            <option value="" disabled selected>
              Select the answer
            </option>
            <option value="True">True</option>
            <option value="False">False</option>
          </select>
          <br />
          {error.answer && <span className="error">{error.answer}</span>}
          <br />
          <Button type="submit" variant="outline-success" className="change">
            {constants.update}
          </Button>
          <Button onClick={cancel} variant="outline-danger" className="cancel">
            {constants.cancel}
          </Button>
        </form>
      </div>
      {showModal ? <ChangePasswordModal changemsg={response} /> : ""}
    </div>
  );
};

export const OnlineTestList = () => {
  const navigation = useNavigate();
  const [response, setResponse] = useState({});

  const deleteData = (id) => {
    axios.delete(`${API.DELETE_QUESTIONS}?id=${id}`).then((response) => {
      console.log(response);
    });
    window.location.reload();
  };

  useEffect(() => {
    axios.get(`${API.GET_QUESTIONS}`).then((response) => {
      setResponse(response.data);
    });
  }, []);

  return (
    <div className="onlineTestTable">
      <NavbarScreen></NavbarScreen>
      <Button className="button" onClick={() => navigation("/updateTest")}>
        {constants.addQUESTIONS}
      </Button>
      <Button
        className="button"
        onClick={() => navigation("/online-test-list")}
      >
        {constants.listOfQuestions}
      </Button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Course</th>
            <th>Question</th>
            <th>Level</th>
            <th>Answer</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {response && response.length > 0 ? (
            response.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.course}</td>
                <td>{data.question}</td>
                <td>{data.level}</td>
                <td>{data.answer}</td>
                <td>
                  <Button onClick={() => deleteData(data._id)}>
                    <DeleteIcon />
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">{constants.noDataAvailable}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
