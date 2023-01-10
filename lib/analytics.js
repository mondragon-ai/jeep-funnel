import uuid from "uuid";
import axios from "axios";

const analyticsUrl =
  "https://us-central1-impowered-funnel.cloudfunctions.net/funnel/analytics/page_views";

export const sendPageViewEvent = (page) => {
  // generate a unique visitor ID if one doesn't exist
  let visitorId = Cookies.get("visitorId");
  let page_view = [[page, "page_view"]];
  if (!visitorId) {
    visitorId = uuid.v4();
    Cookies.set("visitorId", visitorId);
    page_view = [[page, "unique_page_view"]];
  }

  // send the page view event to the analytics service
  axios.post(
    analyticsUrl,
    {
      page_view,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
