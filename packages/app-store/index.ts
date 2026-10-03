// Dynamically import app store components to eliminate local dev compilation bottlenecks
import dynamic from "next/dynamic";

export const appStoreMap = {
  typeform: dynamic(() => import("./typeform")),
  googlecalendar: dynamic(() => import("./googlecalendar")),
  office365calendar: dynamic(() => import("./office365calendar")),
  zoom: dynamic(() => import("./zoom")),
  stripe: dynamic(() => import("./stripe")),
};

export default appStoreMap;
