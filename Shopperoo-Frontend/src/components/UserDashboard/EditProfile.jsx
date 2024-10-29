import React from "react";
import Button from "../../reuseableComponents/Button";
import Constants from "../../../constants";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function EditProfile({ user, setEditProfile }) {
  console.log(user);
  const [formData, setFormData] = React.useState({
    fullName: user.fullName,
    userName: user.userName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    gender: user.gender || "",
    dateOfBirth: user.dateOfBirth || "",
    address: user.address || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <TextField
            id="outlined-basic"
            value={formData.fullName}
            onChange={handleChange}
            label="Name"
            sx={{
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
            }}
            variant="outlined"
          />
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <TextField
            id="outlined-basic"
            value={formData.userName}
            disabled
            onChange={handleChange}
            label="User Name"
            sx={{
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
            }}
            variant="outlined"
          />
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <TextField
            id="outlined-basic"
            value={formData.email}
            disabled
            onChange={handleChange}
            label="Email"
            sx={{
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
            }}
            variant="outlined"
          />
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <TextField
            id="outlined-basic"
            value={formData.phoneNumber}
            onChange={handleChange}
            label="Phone Number"
            sx={{
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
            }}
            variant="outlined"
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
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: Constants.YELLOW_PRIMARY },
                    "&:hover fieldset": {
                      borderColor: Constants.EMARALD_PRIMARY,
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: Constants.YELLOW_PRIMARY,
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: Constants.BLACK_PRIMARY,
                    "&:hover": { color: Constants.EMARALD_PRIMARY },
                    "&.Mui-focused": { color: Constants.YELLOW_PRIMARY },
                  },
                }}
              />
            )}
          />
        </div>
        <div className="relative mb-6 flex flex-col gap-1 pb-1">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Birth"
              value={dayjs(formData.dateOfBirth)}
              onChange={(newValue) => {
                setFormData({ ...formData, dateOfBirth: newValue });
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: Constants.YELLOW_PRIMARY },
                  "&:hover fieldset": {
                    borderColor: Constants.EMARALD_PRIMARY,
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: Constants.YELLOW_PRIMARY,
                  },
                },
                "& .MuiInputLabel-root": {
                  color: Constants.BLACK_PRIMARY,
                  "&:hover": { color: Constants.EMARALD_PRIMARY },
                  "&.Mui-focused": { color: Constants.YELLOW_PRIMARY },
                },
                "& .MuiIconButton-root": {
                  color: Constants.YELLOW_PRIMARY,
                },
                "& .MuiPickersDay-root": {
                  "&.Mui-selected": {
                    backgroundColor: Constants.YELLOW_PRIMARY,
                    "&:hover": {
                      backgroundColor: Constants.EMARALD_PRIMARY,
                    },
                  },
                  "&.Mui-active": {
                    backgroundColor: Constants.YELLOW_PRIMARY,
                    "&:hover": {
                      backgroundColor: Constants.EMARALD_PRIMARY,
                    },
                  },
                },
              }}
            />
          </LocalizationProvider>
        </div>
      </div>

      <div className="z-10 bg-red-100"></div>

      <div className="flex flex-col justify-center gap-4 py-4 sm:flex-row">
        <div className="w-full sm:w-1/2">
          <Button width={"full"} color={Constants.YELLOW_PRIMARY} type="submit">
            Submit
          </Button>
        </div>
        <div className="w-full sm:w-1/2">
          <Button
            width={"full"}
            color={Constants.YELLOW_PRIMARY}
            handleClick={() => setEditProfile(false)}
          >
            Exit
          </Button>
        </div>
      </div>
    </form>
  );
}
