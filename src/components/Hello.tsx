import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { StoreState } from '../types';
import {
  incrementEnthusiasm as onIncrement,
  decrementEnthusiasm as onDecrement,
  EnthusiasmAction,
} from '../actions';
import './Hello.css';

interface HelloProps extends RouteComponentProps<StoreState> {
  name: string;
  enthusiasmLevel: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

class Hello extends React.Component<HelloProps, null> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { props } = this;

    if (props.enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {`${name} ${getExclamationMarks(props.enthusiasmLevel)}`}
        </div>
        <div>
          <button onClick={props.onDecrement}>-</button>
          <button onClick={props.onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    name: state.enthusiasm.languageName,
    enthusiasmLevel: state.enthusiasm.enthusiasmLevel,
  }), { onIncrement, onDecrement },
)(Hello as typeof React.Component);

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
