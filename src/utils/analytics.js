// analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-22115QRM7G");
};

export const logPageView = (pagePath) => {
  ReactGA.send({ hitType: "pageview", page: pagePath });
};
