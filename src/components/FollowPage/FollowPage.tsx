import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import TrebleClef from '../TrebleClef';
import OcarinaController from '../OcarinaController';
import { Note } from '../../types';
import { getHolesFromNote} from '../../utils';

type FollowAlong = {
  label: string;
  id: string;
  helper?: string;
  notes: Note[];
};

const lessons: FollowAlong[] = [
  { id: 'scales', label: 'Follow the Scale', notes: [
    'A3' as Note,
    // 'A#3' as Note,
    // 'Bb3' as Note,
    'B3' as Note,
    'C4' as Note,
    // 'C#4' as Note,
    'D4' as Note,
    // 'D#4' as Note,
    'E4' as Note,
    'F4' as Note,
    // 'F#4' as Note,
    'G4' as Note,
    // 'G#4' as Note,
    'A4' as Note,
    // 'A#4' as Note,
    'B4' as Note,
    'C5' as Note,
    // 'C#5' as Note,
    'D5' as Note,
    // 'D#5' as Note,
    'E5' as Note,
    'F5' as Note,
  ] },
  { id: 'random', label: 'Random', notes: [] },
  { id: 'sot', label: 'Song Of Time', notes: [] },
];

const FollowPage: React.FC = (): React.ReactElement => {
  const [currentNoteIndex, setCurrentNoteIndex] = useState<number>(0);
  const [params] = useSearchParams();
  const selection: string = params.get('selection') || '';
  const navigate = useNavigate();
  const followAlong: FollowAlong|null = lessons.find((lesson: FollowAlong) => lesson.id === selection) || null;
  const noteSet: Note[] = followAlong?.notes || [];
  const currentNote: Note|null = noteSet[currentNoteIndex] || null;
  const noteHoles: number[] = getHolesFromNote(currentNote);



  useEffect(() => {
    if (!selection) {
      navigate(`/follow?selection=${lessons[0].id}`, {
        replace: true,
      });
    } else {
      setCurrentNoteIndex(0);
    }
  }, [selection, navigate, setCurrentNoteIndex]);

  useEffect(() => {
    // TODO: Rig a scheme so that these notes can have custom
    // times, not a fixed time.
    const interval = setInterval(() => {
      let nextIndex = currentNoteIndex + 1;
      if (nextIndex === noteSet.length) {
        nextIndex = 0;
      }

        setCurrentNoteIndex(nextIndex);
    }, 1000);

    return () => clearInterval(interval);
  }, [noteSet, currentNoteIndex, setCurrentNoteIndex]);

  return (
    <div className="d-flex">
      <div className="flex-1">
        {lessons.map((lesson: FollowAlong, index: number) => (
          <div key={index}>
            <Link
              to={`/follow?selection=${lesson.id}`}
              className={classnames('btn btn-primary', { active: lesson.id === followAlong?.id })}
            >
              {lesson.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex-2 pl-3">
        <TrebleClef displayedNote={currentNote} />
        <div className="mt-3">
          <OcarinaController readonly selectedHoles={noteHoles} />
        </div>
      </div>
    </div>
  );
}

export default FollowPage;
