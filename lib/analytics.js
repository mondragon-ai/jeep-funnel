import { validate as uuidValidate, v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import { imPoweredRequest } from "./request";
import { useEffect, useState } from "react";

const analyticsUrl =
  "https://us-central1-impowered-funnel.cloudfunctions.net/funnel/analytics/page_views";

export const sendPageViewEvent = async (page) => {
  // generate a unique visitor ID from cookies
  let visitorId = Cookies.get("visitorId");
  let page_view = [[page, "page_views"]];

  // if the visitor ID is not valid, generate a new one
  if (!uuidValidate(visitorId)) {
    visitorId = uuidv4();
    Cookies.set("visitorId", visitorId);
    page_view = [...page_view, [page, "unique_page_views"]];
  }

  const response = await imPoweredRequest("POST", analyticsUrl, {
    page_view,
    fun_uuid: "fun_7626c00357",
  });

  console.log({ page, response });
};


export const pageview = url => {

  if (!window) {
    console.error("NO WINDOW OBJ")
  } else {
    window.gtag('config', 'AW-10793712364', {
      page_path: url
    })
  }
};

export const event = (action, value) => {
  if (!window) {
    console.error("NO WINDOW OBJ")
  } else {
    console.log("WINDOW EXISTS:")
    console.log(action)
    console.log(value)
    window.gtag('event', action, value);
  }
}