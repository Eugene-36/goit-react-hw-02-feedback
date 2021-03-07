import { Component } from "react";
import "./App.css";

//todo: Вторая дз
import FeedbackOptions from "./components/FeedBack/FeedBack";
import Statistics from "./components/FeedBack/Statistics";
import Section from "./components/FeedBack/SectionTitle";
import Notification from "./components/FeedBack/Notification";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countFeedback = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      ...{ [e.target.textContent]: prevState[e.target.textContent] + 1 },
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };
  countPositiveFeedbackPercentage() {
    const { good, bad, neutral } = this.state;
    let v = (good / (good + bad + neutral)) * 100;
    return Math.round(v);
  }
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="App">
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={(good, neutral, bad)}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>

        <Section title="">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
