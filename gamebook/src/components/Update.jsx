import { useState } from "react";

// const defaultFormfields = {
//   userName: '',
//   firstName: '',
//   lastName: '',
//   email: '',
//   phoneNumber: '',
//   password: ''
// }

const Update = () => {
  const [Formfields, setFormfields] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isError, setIsError] = useState("");
  const { userName, firstName, lastName, email, phoneNumber, password } =
    Formfields;

  return (
    <div className="signUp-container">
      <h1>Update Account</h1>
      <form>
        <div className="inputbox">
          <input type="text" name="firstName" value={firstName} placeholder='First Name' required />
        </div>
        <div className="inputbox">
          <input type="text" name="lastName" value={lastName} placeholder='Last Name' required />
        </div>

        <div className="inputbox">
          <input type="text" name="userName" value={userName} placeholder='UserName' required />
        </div>
        <div className="inputbox">
          <input type="email" name="email" value={email} placeholder=' Email' required />
        </div>
        <div className="inputbox">
          <input type="password" name="password" value={password} placeholder='Password' required />
        </div>
        <button className="signUpbtn">Update</button>
      </form>
    </div>
  );
};

export default Update;
