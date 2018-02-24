import React from 'react';
import {fetchAllPossibleSelectors} from '../Shared/EntityHelpers'


const SelectorPicker = ({entities, chooseSelector, chosenSelector}) => {

    if(!entities) {
        return null;
    }


    const selectorFactory = (selectors) => {
        return selectors.map((selector, i) => {

            const _chooseSelector = () => {
                chooseSelector(selector);
            };

            const isChosen = selector === chosenSelector;


            let img = selector.img;
            img = '/assets/' + img + '.png';

            return (
                <img key={i}
                     src={img}
                     alt={selector.name}
                     onClick={_chooseSelector}
                     className={isChosen ? 'selected' : ""}/>
            )
        })
    };




    return (
        <div className="selector-picker">
            {entities ? selectorFactory(fetchAllPossibleSelectors(entities)) : ""}
        </div>
    )

};

export default SelectorPicker;
