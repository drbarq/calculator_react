import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: 'd064c7b2-33a5-4a3c-9f3d-85091d448067',
    clientToken: 'pub9d0870783bb266a463013cf007ded411',
    site: 'datadoghq.com',
    service:'calculator',
    
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    sessionReplaySampleRate: 20,
    trackInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();


export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-app">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
