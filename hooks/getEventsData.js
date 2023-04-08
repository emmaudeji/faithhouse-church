import React from "react";
import { eventList } from "@/Data/eventList";

const getEventsData = (eventData) => {
  let data = "empty data";
  let err = "empty error";

  const {dynamicEvents, dyErr} = generateDynamicEvents(eventData)
 
  try {
    // filter static event with dynamic event
    const filterByReference = (arr1, arr2) => {
      let res = [];
      res = arr1.filter(el => {
         return !arr2.find(element => {
            return String(element.title) === String(el.title);
         });
      });
      return res;
   }
    
    const result = filterByReference(eventList, dynamicEvents);

    // add filtered result to dynamicEvents
    dynamicEvents.push(...result)

    data = dynamicEvents
  } catch (error) {
    err = error;
  }

  return {
    data,
    err: dyErr,
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
export const generateDynamicEvents = (eventData) => {
  let dynamicEvents = "";
  let dyErr = "empty error";


  try {
    // filter dynamic sevent by date
    const filterOldevent = eventData.filter(item => new Date(item.eventDate) >= new Date() )
    // check if title is undefined and add other_event as title
    filterOldevent.map(item => {
      if(item.title === undefined &&  item.other_event) {
        item.title = item.other_event
      }
    })

    dynamicEvents = filterOldevent;
  } catch (error) {
    dyErr = error;
  }

  return {
    dynamicEvents,
    dyErr,
  };
};
