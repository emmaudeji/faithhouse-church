import React from "react";

const getEventsData = () => {
  let data = "empty data";
  let err = "empty error";

  try {
    data = "mmmmmmmmmmm";
  } catch (error) {
    err = error;
  }

  return {
    data,
    err,
  };
};

export default getEventsData;

// generate date
export const generateDays = () => {
  let days = "";

  try {
    data = "mmmmmmmmmmm";
  } catch (error) {
    err = error;
  }

  return {
    data,
    err,
  };
};

// generate static event list
export const generateStaticEvents = () => {
  let staticEvents = "";

  try {
    staticEvents = "mmmmmmmmmmm";
  } catch (error) {
    err = error;
  }

  return {
    staticEvents,
    err,
  };
};

// generate dynamic event list
export const generateDynamicEvents = () => {
  let dynamicEvents = "";

  try {
    dynamicEvents = "mmmmmmmmmmm";
  } catch (error) {
    err = error;
  }

  return {
    dynamicEvents,
    err,
  };
};
