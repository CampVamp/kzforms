import axios from "axios";
import TextField from "./TextField";
import SubmitForm from "./SubmitForm";
import { useState } from "react";

import { userSchema } from "../Validations/UserValidations";

const Form = () => {
  const [data, setData] = useState({});
  const [showform, setShowForm] = useState(true);
  let formdata;
  const handleSubmit = async (event) => {
    event.preventDefault();
    formdata = {
      name: event.target.name.value,
      regNo: event.target.regNo.value,
      pEmail: event.target.pEmail.value,
      sEmail: event.target.sEmail.value,
      gitlink: event.target.gitlink.value,
    };

    const isValid = await userSchema.isValid(formdata);

    // axios
    //   .post(`${process.env.REACT_APP_API_BASE_URL}/posts`, formdata)
    //   .then((res) => {
    //     console.log(res);
    //     setData(formdata);
    //     setShowForm(false);
    //   })
    //   .catch((err) => console.error(err));
    try {
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/posts`, formdata);
      // console.log(res);
      console.log(isValid);
      setData(formdata);
      setShowForm(false);
    } catch (err) {
      console.error("Cannot Post", err);
    }
  };

  console.log("Data :", data);

  return (
    <div className="Main-Frame">
      {showform && (
        <>
          <h1 className="Form-Title">REGISTRATION</h1>
          <form onSubmit={handleSubmit}>
            <TextField text="Name" name="name" />
            <br />
            <TextField text="Registration No" name="regNo" />
            <br />
            <TextField text="Personal Email" name="pEmail" />
            <br />
            <TextField text="SRMIST Email" name="sEmail" />
            <br />
            <TextField text="Github Link" name="gitlink" />
            <br />
            <button className="Form-Btn" type="Submit">
              SUBMIT
            </button>
          </form>
        </>
      )}
      {!showform && <SubmitForm />}
    </div>
  );
};

export default Form;
