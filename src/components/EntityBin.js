import React from "react";

const EntityBin = ({entities}) => {

  const ImageFactory = (entities) => {
    return (
      entities.map(function(entity) {
        return (<img
                  key={entity.name}
                  src={entity.img}
                  alt={entity.name}
                  />)
      })
    );
  }

  return (
    <div className="entity-bin">
      {ImageFactory(entities)}
    </div>
  );
};

export default EntityBin;
