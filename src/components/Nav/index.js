import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import './index.css';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Nav extends Component {

constructor(props) {
  super(props);
  this.state = {
    open: false
  };
}

  render() {
    const NavBarMenuItem = (props) => {
      return (
        <MenuItem style={{fontSize: "20px"}} onClick={this.handleClose} primaryText={props.primaryText} containerElement={props.containerElement} />
      )
    }

    return (
      <div className="Nav">
      <AppBar
        title="Local Elections in Colorado"
        onLeftIconButtonClick={this.handleMenuToggle}
      >
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          width={450}
        >
          <NavBarMenuItem primaryText="Home" containerElement={<Link to="/" />} />
          <NavBarMenuItem primaryText="Elections" containerElement={<Link to="/elections" />}/>
          <NavBarMenuItem primaryText="Candidates" containerElement={<Link to="/candidates" />}/>
        </Drawer>
        </AppBar>
      </div>
    );
  }

  handleMenuToggle = () => {
    this.setState({open: !this.state.open});
  }

  handleClose = () => {
    this.setState({open: false});
  }

}




export default Nav;

