import React from "react";

const EntityBin = ({entities, entityOnClick}) => {

  const imageFactory = (entities) => {
    return (
      entities.map(function(entity) {
        return (<img
                  key={entity.name}
                  src={entity.img}
                  alt={entity.name}
                  name={entity.name}
                  onClick={entityOnClick}
                  />)
      })
    );
  }

  return (
    <div className="entity-bin">
      {imageFactory(entities)}
    </div>
  );
};

export default EntityBin;
