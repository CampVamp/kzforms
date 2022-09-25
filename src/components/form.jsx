import { useState } from "react";

const Form = () => {
  //Values
  const [values, setValues] = useState({
    name: "",
    regNo: "",
    pEmail: "",
    sEmail: "",
    gitlink: "",
  });
  const [submitted, setSubmitted] = useState(false);

  //Input Change Handler
  const handleNameInputChange = (event) => {
    setValues({ ...values, name: event.target.value });
  };
  const handleRegnoInputChange = (event) => {
    setValues({ ...values, regNo: event.target.value });
  };
  const handlePemailInputChange = (event) => {
    setValues({ ...values, pEmail: event.target.value });
  };
  const handleSemailInputChange = (event) => {
    setValues({ ...values, sEmail: event.target.value });
  };
  const handleGitlinkInputChange = (event) => {
    setValues({ ...values, gitlink: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  //Forms
  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={values.name}
          placeholder="Name"
          className="form-field"
          onChange={handleNameInputChange}
        ></input>
        <br></br>
        <input
          type="text"
          value={values.regNo}
          placeholder="Registeration No"
          className="form-field"
          onChange={handleRegnoInputChange}
        ></input>
        <br></br>
        <input
          type="text"
          value={values.pEmail}
          placeholder="Personal email"
          className="form-field"
          onChange={handlePemailInputChange}
        ></input>
        <br></br>
        <input
          type="text"
          value={values.sEmail}
          placeholder="SRMIST emil"
          className="form-field"
          onChange={handleSemailInputChange}
        ></input>
        <br></br>
        <input
          type="text"
          value={values.gitlink}
          placeholder="Github Link"
          className="form-field"
          onChange={handleGitlinkInputChange}
        ></input>
        <br></br>
        <button className="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
