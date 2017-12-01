import React from 'react';

function Spinner() {
  return (
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <i className='fa fa-spinner fa-pulse fa-4x is-centered' aria-hidden='true'></i>
        </div>
      </div>
    </nav>
  );
}

export default Spinner;