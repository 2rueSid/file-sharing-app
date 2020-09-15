import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header/header';
import LeftMenu from './leftMenu/leftMenu';
import MainWorkspace from './mainWorkspace/mainWorkspace';
import RightMenu from './rightMenu/rightMenu';
import './dashboard.css';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      file: {},
      searchedResult: null,
    };
  }
  getFileInfo = file => {
    this.setState(() => {
      return { file: file };
    });
  };
  getSearchedResult = result => {
    this.setState({ searchedResult: result });
  };
  render() {
    const { file, searchedResult } = this.state;

    return (
      <div className="dashboard">
        <Header getSearchedResult={this.getSearchedResult} />
        <LeftMenu />
        <Router>
          <Switch>
            <Route
              path={'/dashboard/share/:share_token'}
              component={props => <MainWorkspace {...props} getFile={this.getFileInfo} />}
            />
            <Route
              path={'/dashboard/folder/:folder_id'}
              component={props => <MainWorkspace {...props} getFile={this.getFileInfo} />}
            />
            <Route
              path={'/dashboard'}
              component={props => (
                <MainWorkspace
                  {...props}
                  getFile={this.getFileInfo}
                  searchedResult={searchedResult}
                />
              )}
            />
          </Switch>
        </Router>
        <RightMenu setFileInfo={file} />
      </div>
    );
  }
}

export default Dashboard;
