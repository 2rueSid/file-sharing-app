import React from 'react';
import SwitchButtonsView from './SwitchButtonsView';
class SwitchButtons extends React.Component {
  constructor() {
    super();
    this.state = {
      activeButton: '',
    };
  }
  loginButtonClick = () => {
    this.setState({ activeButton: 'login' });
  };

  registerButtonClick = () => {
    this.setState({ activeButton: 'register' });
  };
  render() {
    const { activeButton } = this.state;
    return (
      <SwitchButtonsView
        logBtnClick={this.loginButtonClick}
        regBtnClick={this.registerButtonClick}
        buttonClicked={activeButton}
      />
    );
  }
}

export default SwitchButtons;
