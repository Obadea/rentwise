import * as React from "react";
import { useState } from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateField } from "@mui/x-date-pickers/DateField";
import { TimePicker } from "@mui/x-date-pickers";

export default function DateAndTimePicker({ label, value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DatePicker", "DesktopDatePicker", "MobileDatePicker"]}
        className="flex"
      >
        <div className="flex justify-between">
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

          <div className="w-40">
            <TimePicker
              value={value}
              onChange={onChange}
              referenceDate={dayjs("2022-04-17")}
            />
          </div>
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
