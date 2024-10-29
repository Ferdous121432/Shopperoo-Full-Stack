import React from "react";

import Button from "../../reuseableComponents/Button";
import Constants from "../../../constants";
import { useAuth } from "../../context/AuthProvider";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Autocomplete from "@mui/material/Autocomplete";

export default function EditProfile({ user, setEditProfile }) {
  const { state, updateMe } = useAuth();
  const [formData, setFormData] = React.useState({
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    gender: user.gender || "",
    dateOfBirth: user.dateOfBirth || "",
    address: user.address || "",
  });

  console.log(formData);

  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //FIXME: Toaster for error messages
  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = "";
    switch (name) {
      case "fullName":
        if (!/^[A-Za-z ]+$/.test(value)) {
          error = "Invalid name format";
        }
        break;
      case "userName":
        if (!/^[A-Za-z0-9_]+$/.test(value)) {
          error = "Invalid user name format";
        }
        break;
      case "email":
        if (!/^[A-Za-z0-9@.]+$/.test(value)) {
          error = "Invalid email format";
        }
        break;
      case "phoneNumber":
        if (!/^[0-9]{11}$/.test(value)) {
          error = "Phone number must be exactly 11 digits";
        }
        break;
      case "gender":
        if (!/^[A-Za-z ]+$/.test(value)) {
          error = "Invalid gender format";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = () => {
    // Basic form validation
    if (!formData.firstName || !formData.lastName || !formData.phoneNumber) {
      alert("Please fill in all required fields.");

      return;
    }
    // Handle form submission logic here
    console.log(formData);
    updateMe(formData);
    if (state.update_status === "success") {
      window.location.reload();
    }
  };

  const muiCustomInput = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: Constants.YELLOW_PRIMARY },
      "&:hover fieldset": { borderColor: Constants.EMARALD_PRIMARY },
      "&.Mui-focused fieldset": {
        borderColor: Constants.YELLOW_PRIMARY,
      },
    },
    "& .MuiInputLabel-root": {
      color: Constants.BLACK_PRIMARY,
      "&:hover": { color: Constants.EMARALD_PRIMARY },
      "&.Mui-focused": { color: Constants.YELLOW_PRIMARY },
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <TextField
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            label="First Name"
            sx={muiCustomInput}
            variant="outlined"
            inputProps={{ pattern: "[A-Za-z ]+" }}
            error={!!errors.firstName}
            FormHelperTextProps={{ style: { color: "red" } }}
            helperText={
              !formData.firstName ? (
                "First name is required"
              ) : !/^[A-Za-z ]+$/.test(formData.firstName) ? (
                "Invalid name format"
              ) : (
                <span style={{ color: "green" }}>Valid name format</span>
              )
            }
          />
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <TextField
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Last Name"
            sx={muiCustomInput}
            variant="outlined"
            inputProps={{ pattern: "[A-Za-z ]+" }}
            error={!!errors.lastName}
            FormHelperTextProps={{ style: { color: "red" } }}
            helperText={
              !formData.lastName
                ? "Last name is required"
                : !/^[A-Za-z ]+$/.test(formData.lastName)
                  ? "Invalid name format"
                  : ""
            }
          />
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <TextField
            id="userName"
            name="userName"
            value={formData.userName}
            disabled
            onChange={handleChange}
            onBlur={handleBlur}
            label="User Name"
            sx={muiCustomInput}
            variant="outlined"
            inputProps={{ pattern: "[A-Za-z0-9_]+" }}
            error={!!errors.userName}
            FormHelperTextProps={{ style: { color: "red" } }}
            helperText={errors.userName || ""}
          />
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <TextField
            id="email"
            name="email"
            value={formData.email}
            disabled
            onChange={handleChange}
            onBlur={handleBlur}
            label="Email"
            sx={muiCustomInput}
            variant="outlined"
            inputProps={{
              pattern: "[A-Za-z0-9@.]+",
              title: "Please enter a valid email address",
            }}
            error={!!errors.email}
            FormHelperTextProps={{ style: { color: "red" } }}
            helperText={errors.email || ""}
          />
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Phone Number"
            sx={muiCustomInput}
            variant="outlined"
            inputProps={{ pattern: "[0-9]+" }}
            error={!!errors.phoneNumber}
            FormHelperTextProps={{ style: { color: "red" } }}
            helperText={
              !formData.phoneNumber
                ? "Phone number is required"
                : !/^[0-9]{11}$/.test(formData.phoneNumber)
                  ? "Invalid phone number format (must be 11 digits)"
                  : ""
            }
          />
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <Autocomplete
            disablePortal
            options={["Male", "Female", "Other"]}
            value={formData.gender}
            onChange={(event, newValue) => {
              setFormData({ ...formData, gender: newValue });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Gender"
                sx={muiCustomInput}
                inputProps={{ ...params.inputProps, pattern: "[A-Za-z ]+" }}
                error={!!errors.gender}
                FormHelperTextProps={{ style: { color: "red" } }}
                helperText={errors.gender || ""}
                onBlur={handleBlur}
              />
            )}
          />
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Birth"
              value={formData.dateOfBirth ? dayjs(formData.dateOfBirth) : null}
              onChange={(newValue) => {
                setFormData({
                  ...formData,
                  dateOfBirth: newValue ? newValue.format("YYYY-MM-DD") : "",
                });
              }}
              sx={{
                ...muiCustomInput,
                "& .MuiIconButton-root": {
                  color: Constants.YELLOW_PRIMARY,
                },
                ".MuiPopper-root .MuiPickersLayout-root": {
                  backgroundColor: Constants.YELLOW_PRIMARY,
                },
              }}
            />
          </LocalizationProvider>
        </div>
      </div>

      <div className="z-10 bg-red-100"></div>

      <div className="flex flex-col justify-center gap-4 py-4 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <Button
            width={"full"}
            color={Constants.YELLOW_PRIMARY}
            disabled={state.loading}
            type="submit"
          >
            {state.loading ? "Submitting..." : "Submit"}
          </Button>
        </div>
        <div className="w-full sm:w-1/2">
          <Button
            width={"full"}
            color={Constants.YELLOW_PRIMARY}
            handleClick={() => setEditProfile(false)}
            disabled={state.loading}
          >
            Exit
          </Button>
        </div>
      </div>
    </form>
  );
}
