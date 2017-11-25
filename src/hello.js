import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import Button from 'material-ui/Button';

@inject('appState')
@observer
export class Hello extends Component {
  render() {
    return (
      <div>
        <Button raised >
          {this.props.appState.testCount}
        </Button>
      </div>
    );
  }
}
