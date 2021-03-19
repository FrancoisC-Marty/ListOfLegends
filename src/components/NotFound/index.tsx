import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './style.scss';

const NotFound = ({ id }: {id: string}) => (
  <div className="slicer-container">
    <div className="slicer">
      <div className="slicer-top" title="404" />
      <div className="slicer-bottom" title="404" />
      <div className="slicer-position">
        <p className="slicer-text">{`Sorry summonner\nNo League Champion is named "${id}"`}</p>
        <Link to="/" className="slicer-link">Back to champion select</Link>
      </div>
    </div>
  </div>
);

NotFound.propTypes = {
  id: PropTypes.string.isRequired,
};

export default NotFound;
