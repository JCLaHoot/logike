import React, {Component} from 'react';
import renderLogicalCondition from '../../Shared/renderLogicalCondition';


// TODO: make component functional instead of class based
class QuestionZone extends Component {

    constructor({props, puzzle, textContent}) {
        super(props);
        this.state = {
            puzzle
        };
    }


    render() {
        return (
            <div className="question-zone">
                {this.props.textContent}
                <div className="wrap-row">
                    {renderLogicalCondition(this.state.puzzle.logic, this.state.puzzle.entities)}
                </div>
            </div>
        )
    }

}

export default QuestionZone;
