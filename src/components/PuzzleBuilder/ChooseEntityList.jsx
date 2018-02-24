import React from 'react';

import EntityListPreview from './EntityListPreview';


const ChooseEntityList = ({entityLists, selectEntityList, selectedEntityList}) => {

    const generateEntityPreviews = (entityLists) => {
        return entityLists.map((entities, i) => {
            var selected = false;
            if (entities === selectedEntityList) {
                selected = true;
            }
            return (
                <EntityListPreview
                    key = {i}
                    entities={entities}
                    selectEntityList={selectEntityList}
                    selected={selected}/>
            )
        })
    };

    return (
        <div className="choose-entity-list">
            <h4>Select a set of entities</h4>
            {generateEntityPreviews(entityLists)}
            <p>or, <a>
                create a new set of entities <i className="fa fa-picture-o" aria-hidden="true">
            </i> (coming soon)
            </a>
            </p>

        </div>
    )

};

export default ChooseEntityList;
