import axios from "axios";
import TextField from "./TextField";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/posts`, {
        name: event.target.name.value,
        regNo: event.target.regNo.value,
        pEmail: event.target.pEmail.value,
        sEmail: event.target.sEmail.value,
        gitlink: event.target.gitlink.value,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div className="Main-Frame">
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
    </div>
  );
};

export default Form;
