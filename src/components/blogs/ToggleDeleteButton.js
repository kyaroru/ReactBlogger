import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ducks from './ducks';

type Props = {
  toggleDeleteMode: Function,
};

class ToggleDeleteButton extends Component {
  props: Props;

  render() {
    return (
      <TouchableOpacity
        style={{ paddingRight: 20 }}
        onPress={() => this.props.toggleDeleteMode()}
      >
        <Icon name="trash" size={20} color="#fff" />
      </TouchableOpacity>

    );
  }
}

const mapDispatchToProps = {
  toggleDeleteMode: ducks.toggleDeleteMode,
};

export default connect(null, mapDispatchToProps)(ToggleDeleteButton);
