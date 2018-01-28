import React from 'react';


const SelectorPicker = ({entities, chooseSelector, chosenSelector}) => {

    if(!entities) {
        return null;
    }


    const selectorFactory = (selectors) => {
        return selectors.map((selector) => {

            const _chooseSelector = () => {
                chooseSelector(selector);
            };

            const isChosen = selector === chosenSelector;

            return (
                <img src={selector.img}
                     alt={selector.name}
                     onClick={_chooseSelector}
                     className={isChosen ? 'selected' : ""}/>
            )
        })
    };




    return (
        <div className="selector-picker">
            {entities ? selectorFactory(entities.fetchAllPossibleSelectors(entities)) : ""}
        </div>
    )

};

export default SelectorPicker;
