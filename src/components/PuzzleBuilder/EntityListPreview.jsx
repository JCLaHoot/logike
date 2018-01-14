import React from 'react';


const EntityListPreview = ({entities, selectEntityList, selected}) => {

  const entityfactory = (entities) => {
    return entities.list.map((entity) => {
      return (
        <img src={entity.img} alt={entity.name}/>
      )
    })
  }

  const selectEntities = () => {
    selectEntityList(entities);
  }


  return (
    <div className={`entity-list-preview ${selected ? "selected" : ""}`} onClick={selectEntities}>
      {entityfactory(entities)}
    </div>
  )

}

export default EntityListPreview;
