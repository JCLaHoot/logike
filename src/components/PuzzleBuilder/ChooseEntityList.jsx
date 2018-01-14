import React from 'react';

import EntityListPreview from './EntityListPreview';


const ChooseEntityList = ({entityLists, selectEntityList, selectedEntityList}) => {

  const generateEntityPreviews = (entityLists) => {
    return entityLists.map((entities) => {
      var selected = false;
      if(entities === selectedEntityList){
        selected = true;
      }
      return (
        <EntityListPreview
          entities={entities}
          selectEntityList={selectEntityList}
          selected={selected}/>
      )
    })
  }

  return (
    <div className="choose-entity-list">
      <h4>Select a set of entities</h4>
      {generateEntityPreviews(entityLists)}
    </div>
  )

}

export default ChooseEntityList;
