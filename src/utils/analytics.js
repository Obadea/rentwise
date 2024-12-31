// analytics.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(process.env.REACT_APP_GA_ID);
};

export const logPageView = (pagePath) => {
  ReactGA.send({ hitType: "pageview", page: pagePath });
};
