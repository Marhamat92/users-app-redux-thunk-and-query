import React from 'react'
import classNames from 'classnames'

function Skeleton({ times }) {

  const outerClassNames = classNames();
  const innerClassNames = classNames();

  const boxes = Array(times).fill(0).map((_, i) => {
    return <div key={i}>
      <div />
    </div>;
  });



  return
}

export default Skeleton