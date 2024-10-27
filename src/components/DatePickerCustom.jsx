import * as React from "react";

import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DatePickerCustom({ label, value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DatePicker", "DesktopDatePicker", "MobileDatePicker"]}
        className="flex"
      >
        <div className="w-48">
          <DatePicker
            // sx={{ width: "10px" }}
            label={label}
            value={value}
            onChange={onChange}
            minDate={dayjs(new Date())}
            defaultValue={dayjs(new Date())}
            format="LL"
          />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
