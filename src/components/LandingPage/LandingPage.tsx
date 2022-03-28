import React from 'react';
import { Link } from 'react-router-dom';

/*
  TODO:
  Lessons - learn about theory and how the ocarina works in a specified order; your progress can be saved to localstorage

  Quiz - see a note and choose the fingerings on the ocarina (or the other way around) to accumulate points in a set amount of time

*/

const LandingPage: React.FC = (): React.ReactElement => {
  return (
    <div className="d-flex">
      <div className="flex-1">Explanation</div>
      <div className="flex-1">
        <Link to="/follow" className="btn btn-primary">Follow Along</Link>
      </div>
    </div>
  );
}

export default LandingPage;
