import React from 'react';

const EntityBin = ({entities, entityOnClick}) => {

  const imageFactory = (entities) => {

    return (
      entities.map((entity, i) => {
        return (<div key={entity.name}>
                  <img
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
