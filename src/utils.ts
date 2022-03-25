import { Note } from './types';

const holesToNoteMap: { [key: string]: Note } = {
  "1:2:3:4:5:6:7:8:9:10:11:12": "A3" as Note,
  "1:2:3:4:5:6:7:8:9:10:11": "A#3" as Note,
  // "1:2:3:4:5:6:7:8:9:10:11": "Bb3" as Note,
  "1:2:3:4:5:6:7:8:9:10:12": "B3" as Note,
  "1:2:3:4:5:6:7:8:9:10": "C4" as Note, // "Middle C"
  "1:2:3:4:5:6:7:9:10:12": "C#4" as Note,
  "1:2:3:4:5:6:7:9:10": "D4" as Note,
  "1:2:3:4:5:7:9:10": "D#4" as Note,
  "1:2:3:4:5:6:9:10": "E4" as Note,
  "1:2:3:4:5:9:10": "F4" as Note,
  "1:2:3:4:6:9:10": "F#4" as Note,
  "1:2:3:4:9:10": "G4" as Note,
  "1:2:4:7:9:10": "G#-" as Note,
  "1:2:4:9:10": "A4" as Note,
  "1:4:7:9:10": "A#4" as Note,
  "1:4:9:10": "B4" as Note,
  "4:9:10": "C5" as Note,
  "4:7:10": "C#5" as Note,
  "4:10": "D5" as Note,
  "1:4": "D#5" as Note,
  "4": "E5" as Note,
  "": "F5" as Note,
};

export const getNoteFromHoles: (holes: number[]) => Note | null = (holes: number[]): Note | null => {
  return holesToNoteMap[holes.sort((a, b) => a - b).join(':')] || null;
};
