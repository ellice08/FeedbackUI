import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import AboutIconLink from "./components/AboutIconLink";
import About from "./components/About";
import Header from "./components/Header";
import Feedbacklist from "./components/Feedbacklist";
import FeedbackData from "./Data/FeedbackData";
import "./App.css";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <FeedbackProvider>
        <Header />
        <Router>
          <div className="container">
            <Route path="/" exact>
              <FeedbackForm />
              <FeedbackStats />
              <Feedbacklist />
            </Route>
          </div>
          <Route path="/about" component={About} />
          <AboutIconLink />
        </Router>
      </FeedbackProvider>
    </>
  );
}

export default App;
