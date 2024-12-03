import Table from "react-bootstrap/Table";
import { NavbarScreen } from "../Navbar/Navbar";
import "../Customers/Customers.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import API from "../../apiManager/endPoints/index";
import { ConfirmDeleteUserModal, DeleteUserModal } from "../../Modal/Modal";
import { useNavigate, useParams } from "react-router-dom";
import constants from "../../utils/constants.js";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const Customers = () => {
  const [responseData, setResponseData] = useState([]);
  const [showDeleteConfirmPopOp, setShowDeleteConfirmPopOp] = useState(false);
  const [showDeleteUserPopOp, setShowDeleteUserPopOp] = useState(false);
  const [userId, setUserId] = useState();
  const [deleteUserResponse, setdeleteUserResponse] = useState("");
  const navigation = useNavigate();
  useEffect(() => {
    axios
      .get(`${API.GET_ALL_USERS}`)
      .then((response) => {
        setResponseData(response.data.filter(result => result.accountType !== 'Student'));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const confirmDelete = (id) => {
    setUserId(id);
    setShowDeleteConfirmPopOp(true);
  };
  const deleteUser = (id) => {
    axios.delete(`${API.DELETE_USER}?userId=${id}`).then((response) => {
      setdeleteUserResponse(response);
      setShowDeleteUserPopOp(true);
    });
    window.location.reload();
  };
  return (
    <div className="customer">
      {/* <NavbarScreen /> */}
      {/* <h1>{constants.customersDetails}</h1> */}
      <Table striped bordered hover variant="primary">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Mobile Number</th>
            <th>Email Address</th>
            <th>Role</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {responseData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.dateOfBirth}</td>
              <td>{item.mobileNumber}</td>
              <td>{item.email}</td>
              <td>{item.accountType}</td>
              <td>
                <Button onClick={() => confirmDelete(item._id)}>
                <DeleteIcon />
                </Button>
              </td>
              <td>
                <Button
                  onClick={() =>
                    navigation(`/customersdetailsupdate/${item._id}`)
                  }
                >
                  <EditIcon />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showDeleteConfirmPopOp ? (
        <ConfirmDeleteUserModal deleteUser={() => deleteUser(userId)} />
      ) : (
        ""
      )}
      {showDeleteUserPopOp ? (
        <DeleteUserModal deletedUserMsg={deleteUserResponse} />
      ) : (
        ""
      )}
    </div>
  );
};

export const CustomerDetailUpdate = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get(`${API.GET_ALL_USERS}/${id}`).then((response) => {
      setUser(response.data);
    });
  }, [id]);

  const navigate = useNavigate();
  const [data, setData] = useState({
    id: user.data.userData._id,
    firstname: user.data.userData.firstName,
    lastname: user.data.userData.lastName,
    dob: user.data.userData.dateOfBirth,
    email: user.data.userData.email,
    mobileNumber: user.data.userData.mobileNumber,
    role: user.data.userData.role,
  });

  const updateData = (val) => {
    val.preventDefault();
    console.log(data);
    axios
      .patch(`${API.UPDATE_PROFILE}?userId=${data.id}`, {
        firstname: data.firstname,
        lastname: data.lastname,
        dob: data.dob,
        email: data.email,
        mobileNumber: data.mobileNumber,
        role: data.role,
      })
      .then((response) => {
        localStorage.setItem(
          "user",
          JSON.stringify({
            user: {
              _id: data.id,
              firstName: data.firstname,
              lastName: data.lastname,
              dateOfBirth: data.dob,
              email: data.email,
              mobileNumber: data.mobileNumber,
              role: data.role,
            },
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInput = (val) => {
    val.preventDefault();
    setData({ ...data, [val.target.name]: val.target.value });
  };

  const cancelUpdate = () => {
    navigate("/Home");
  };
  return (
    <div>
      <NavbarScreen></NavbarScreen>
      <div className="updateProfile">
        <h1>{constants.updateCustomerDetails}</h1>
        <form onSubmit={updateData}>
          <input
            type="text"
            placeholder="Firstname"
            name="firstname"
            value={data.firstname}
            onChange={handleInput}
            readOnly
          />
          <br />
          <input
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={data.lastname}
            onChange={handleInput}
            readOnly
          />
          <br />
          <input
            type="text"
            name="dob"
            placeholder="Date Of Birth"
            value={data.dob}
            onChange={handleInput}
            readOnly
          />
          <br />
          <input
            type="email"
            placeholder="Email Address"
            value={data.email}
            readOnly
          />
          <br />
          <input
            type="text"
            placeholder="Mobile Number"
            value={data.mobileNumber}
            readOnly
          />
          <br />
          <select>
            <option>Admin</option>
            <option>Customer</option>
          </select>
          <br />
          <Button variant="outline-success" onClick={updateData}>
            {constants.update}
          </Button>
          <Button variant="outline-danger" onClick={cancelUpdate}>
            {constants.cancel}
          </Button>
        </form>
      </div>
      {/* {modal ? <ProfileUpdateModal message={response} /> : ""} */}
    </div>
  );
};
