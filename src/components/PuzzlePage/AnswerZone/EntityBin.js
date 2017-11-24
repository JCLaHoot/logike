import React from 'react';

const EntityBin = ({entities, entityOnClick}) => {

  const imageFactory = (entities) => {
    return (
      entities.map(function(entity) {
        return (<div>
                  <img
                  key={entity.name}
                  src={entity.img}
                  alt={entity.name}
                  name={entity.name}
                  onClick={entityOnClick}
                  />
              </div>)
      })
    );
  }

  return (
    <div className="entity-bin">
      {imageFactory(entities.list)}
    </div>
  );
};

export default EntityBin;
