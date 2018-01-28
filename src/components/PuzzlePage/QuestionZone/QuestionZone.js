import React, {Component} from 'react';
import renderLogicalCondition from '../../Shared/renderLogicalCondition';


// TODO: make component functional instead of class based
class QuestionZone extends Component {

    constructor({props, puzzle}) {
        super(props);
        this.state = {
            puzzle
        };
    }


    render() {
        console.log(typeof renderLogicalCondition);
        return (
            <div className="question-zone">
                <div className="wrap-row">
                    {renderLogicalCondition(this.state.puzzle)}
                </div>
            </div>
        )
    }

}

export default QuestionZone;
