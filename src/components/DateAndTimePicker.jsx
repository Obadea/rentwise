import * as React from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";

export default function DateAndTimePicker() {
  const [value, setValue] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DatePicker", "DesktopDatePicker", "MobileDatePicker"]}
      >
        <DatePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          defaultValue={dayjs("2022-04-17")}
          format="LL"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
