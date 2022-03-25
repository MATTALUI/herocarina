import React from 'react';
import classnames from  'classnames';
import { Note } from '../../types';
import { NoteLocation, getRenderLocation } from './utils';

interface TrebleClefProps {
  displayedNote?: Note | null;
  onChange?: (note: Note) => void;
};

const TrebleClef: React.FC<TrebleClefProps> = ({
  displayedNote = null,
  onChange = () => {},
}: TrebleClefProps): React.ReactElement => {
  const location: NoteLocation = getRenderLocation(displayedNote);

  return (
    <div className="cleff-container">
      <img id="treble" src="/treble.svg" alt="" />
      {new Array(6).fill(null).map((_, index: number) => (
        <div
          key={index}
          className={classnames(
            "cleff-sec", location.classes, {
              note: location.secIndex === index
            }
          )}>
        </div>
      ))}
    </div>
  );
}

export default TrebleClef;
