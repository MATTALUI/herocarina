import React, { useCallback, useState } from 'react';
import OcarinaController from '../OcarinaController';
import TrebleClef from '../TrebleClef';
import { Note } from '../../types'
import { getNoteFromHoles } from '../../utils';

const TestPage: React.FC = (): React.ReactElement => {
  const [note, setNote] = useState<Note | null>(null);
  const updateNote = (holes: number[]) => {
    const newNote: Note | null = getNoteFromHoles(holes);

    setNote(newNote);
  };


  return (
    <>
      <TrebleClef displayedNote={note} />
      <OcarinaController onChange={updateNote} />
    </>
  );
}

export default TestPage;
