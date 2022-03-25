import { Note } from '../../types';

export type NoteLocation = {
  secIndex: number | null;
  classes: string[];
};

const noteRenderMap = {
  "A3": { secIndex: 5, classes: ['bottom'] },
  "A#3": { secIndex: null, classes: [], },
  "Bb3": { secIndex: null, classes: [], },
  "B3": { secIndex: 5, classes: [], },
  "C4": { secIndex: 4, classes: ['bottom'] }, // "Middle C"
  "C#4": { secIndex: null, classes: [], },
  "D4": { secIndex: 4, classes: [], },
  "D#4": { secIndex: null, classes: [], },
  "E4": { secIndex: 3, classes: ['bottom'] },
  "F4": { secIndex: 3, classes: [], },
  "F#4": { secIndex: null, classes: [], },
  "G4": { secIndex: 2, classes: ['bottom'] },
  "G#-": { secIndex: null, classes: [], },
  "A4": { secIndex: 2, classes: [], },
  "A#4": { secIndex: null, classes: [], },
  "B4": { secIndex: 1, classes: ['bottom'] },
  "C5": { secIndex: 1, classes: [], },
  "C#5": { secIndex: null, classes: [], },
  "D5": { secIndex: 0, classes: ['bottom'] },
  "D#5": { secIndex: null, classes: [], },
  "E5": { secIndex: 0, classes: [], },
  "F5": { secIndex: 0, classes: ['top'] },
};

export const getRenderLocation: (note: Note | null) => NoteLocation = (note: Note | null): NoteLocation => {
  let location: NoteLocation  = { secIndex: null, classes: [] };
  if (note) {
    location = noteRenderMap[note];
  }

  return location;
}
