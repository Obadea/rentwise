import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerCustom({ label, value, onChange }) {
  const handleDateChange = (newValue) => {
    // Format the date to YYYY-MM-DD and pass it to the onChange callback
    const formattedDate = dayjs(newValue).format("YYYY-MM-DD");
    onChange(formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DatePicker", "DesktopDatePicker", "MobileDatePicker"]}
        className="flex"
      >
        <div className="w-full pr-2">
          <DatePicker
            sx={{ width: "160px" }}
            label={label}
            value={dayjs(value)} // Ensure the value is compatible with Dayjs
            onChange={handleDateChange}
            minDate={dayjs(new Date())}
            defaultValue={dayjs(new Date())}
            name="date"
          />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
