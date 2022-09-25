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
      <form onSubmit={handleSubmit}>
        <TextField text="Name" name="name" className="Form-Feild" />
        <br />
        <TextField text="Registration No" name="regNo" className="Form-Feild" />
        <br />
        <TextField text="Personal Email" name="pEmail" className="Form-Feild" />
        <br />
        <TextField text="SRMIST Email" name="sEmail" className="Form-Feild" />
        <br />
        <TextField text="Github Link" name="gitlink" className="Form-Feild" />
        <br />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
