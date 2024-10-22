import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { TimePicker } from "@mui/x-date-pickers";

export default function TimePickerCustom({ label, value, onChange }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DatePicker", "DesktopDatePicker", "MobileDatePicker"]}
      >
        <div className="w-32">
          <TimePicker label={label} value={value} onChange={onChange} />
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
