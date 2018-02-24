import React from 'react';


const EntityListPreview = ({entities, selectEntityList, selected}) => {

    
    const entityFactory = (entities) => {
        return entities.list.map((entity, i) => {
            let img = entity.img;
                img = '/assets/' + img + '.png';
            return (
                <img key={i} src={img} alt={entity.name}/>
            )
        })
    };

    const selectEntities = () => {
        selectEntityList(entities);
    };


    return (
        <div className={`entity-list-preview ${selected ? "selected" : ""}`} onClick={selectEntities}>
            {entityFactory(entities)}
        </div>
    )

};

export default EntityListPreview;
