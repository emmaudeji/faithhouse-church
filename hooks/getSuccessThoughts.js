import { useState } from "react";
import { daylist28, daylist29, daylist30, daylist31 } from "@/Data/daylist";

export const getContentByMonthlyView = (data) => {
  const [daysoftheMonth, setDaysoftheMonth] = useState(daylist29);
  const [selectedMonth, setSelectedMonth] = useState("January");

  const getMonth = (month) => {
    if (month === "April" || "June" || "November" || "September") {
      setDaysoftheMonth(daylist30);
    } else if (month === "February") {
      setDaysoftheMonth(daylist29);
    } else {
      setDaysoftheMonth(daylist31);
    }
    setSelectedMonth(month);
  };

  return { daysoftheMonth, selectedMonth, getMonth };
};

export const getContentByCategory = (data) => {
  return { f: "r" };
};
