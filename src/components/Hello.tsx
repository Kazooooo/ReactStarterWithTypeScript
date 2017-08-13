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
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

// @connect((state: StoreState) => ({
//   name: state.enthusiasm.languageName,
//   enthusiasmLevel: state.enthusiasm.enthusiasmLevel,
// }), { onIncrement, onDecrement })
class Hello extends React.Component<HelloProps, any> {
  constructor(props) {
    super(props);
    console.log(props);
  }

  // ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: HelloProps) {
  // if (enthusiasmLevel <= 0) {
  //   throw new Error('You could be a little more enthusiastic. :D');
  // }
  public componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  public render() {
    const {
      enthusiasmLevel,
      onDecrement,
      onIncrement,
      name,
    } = this.props;

    console.log(enthusiasmLevel);

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {`${name} ${getExclamationMarks(enthusiasmLevel)}`}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    console.log(state);
    return {
      name: state.enthusiasm.languageName,
      enthusiasmLevel: state.enthusiasm.enthusiasmLevel,
    };
  }, { onIncrement, onDecrement },
)(Hello as typeof React.Component);

// helpers
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
