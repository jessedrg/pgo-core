const alloyDureza = [
  { material_id: 2, test_id: '', finish: 'Sandblasted Mate' },
  { material_id: 64, test_id: '', finish: 'No finish' },
  { material_id: 64, test_id: '', finish: 'Painted' },
  { material_id: 67, test_id: '', finish: 'No finish' },
  { material_id: 68, test_id: '', finish: 'No finish' },
  { material_id: 69, test_id: '', finish: 'No finish' },
  { material_id: 73, test_id: '', finish: 'No finish' },
  { material_id: 73, test_id: '', finish: 'Tinted - Black' },
  { material_id: 63, test_id: 1, finish: 'No finish' },
  { material_id: 63, test_id: 2, finish: 'Tinted - Black' },
  { material_id: 1, test_id: 4, finish: 'No finish' },
  { material_id: 1, test_id: 5, finish: 'Painted' },
  { material_id: 1, test_id: 6, finish: 'Anodized' },
  { material_id: 1, test_id: 7, finish: 'Niquel plating' },
  { material_id: 1, test_id: 8, finish: 'Sandblasted' },
  { material_id: 2, test_id: 9, finish: 'No finish' },
  { material_id: 2, test_id: 10, finish: 'Painted' },
  { material_id: 2, test_id: 11, finish: 'Zinc plated' },
  { material_id: 2, test_id: 12, finish: 'Black oxid' },
  { material_id: 2, test_id: 13, finish: 'Niquel plating' },
  { material_id: 2, test_id: 14, finish: 'Chrome plating' },
  { material_id: 3, test_id: 15, finish: 'No finish' },
  { material_id: 3, test_id: 16, finish: 'Painted' },
  { material_id: 3, test_id: 17, finish: 'Mirror Polished' },
  { material_id: 3, test_id: 18, finish: 'Sandblasted' },
  { material_id: 4, test_id: 19, finish: 'No finish' },
  { material_id: 4, test_id: 20, finish: 'Painted' },
  { material_id: 4, test_id: 21, finish: 'Mirror Polished' },
  { material_id: 4, test_id: 22, finish: 'Chrome plating' },
  { material_id: 4, test_id: 23, finish: 'Sandblasted' },
  { material_id: 5, test_id: 24, finish: 'No finish' },
  { material_id: 5, test_id: 25, finish: 'Painted' },
  { material_id: 5, test_id: 26, finish: 'Mirror Polished' },
  { material_id: 5, test_id: 27, finish: 'Chrome plating' },
  { material_id: 5, test_id: 28, finish: 'Sandblasted' },
  { material_id: 6, test_id: 29, finish: 'No finish' },
  { material_id: 6, test_id: 30, finish: 'Painted' },
  { material_id: 6, test_id: 31, finish: 'Mirror Polished' },
  { material_id: 6, test_id: 32, finish: 'Chrome plating' },
  { material_id: 6, test_id: 33, finish: 'Sandblasted' },
  { material_id: 7, test_id: 34, finish: 'No finish' },
  { material_id: 7, test_id: 35, finish: 'Sandblasted' },
  { material_id: 8, test_id: 36, finish: 'No finish' },
  { material_id: 9, test_id: 37, finish: 'No finish' },
  { material_id: 9, test_id: 38, finish: 'Painted' },
  { material_id: 9, test_id: 39, finish: 'Chrome plating' },
  { material_id: 10, test_id: 40, finish: 'No finish' },
  { material_id: 10, test_id: 41, finish: 'Painted' },
  { material_id: 10, test_id: 42, finish: 'Chrome plating' },
  { material_id: 11, test_id: 43, finish: 'No finish' },
  { material_id: 11, test_id: 44, finish: 'Painted' },
  { material_id: 11, test_id: 45, finish: 'Chrome plating' },
  { material_id: 12, test_id: 46, finish: 'No finish' },
  { material_id: 12, test_id: 47, finish: 'Painted' },
  { material_id: 12, test_id: 48, finish: 'Chrome plating' },
  { material_id: 13, test_id: 49, finish: 'No finish' },
  { material_id: 13, test_id: 50, finish: 'Painted' },
  { material_id: 13, test_id: 51, finish: 'Chrome plating' },
  { material_id: 14, test_id: 52, finish: 'No finish' },
  { material_id: 15, test_id: 53, finish: 'No finish' },
  { material_id: 16, test_id: 54, finish: 'No finish' },
  { material_id: 17, test_id: 55, finish: 'No finish' },
  { material_id: 18, test_id: 56, finish: 'No finish' },
  { material_id: 21, test_id: 57, finish: 'No finish' },
  { material_id: 22, test_id: 58, finish: 'No finish' },
  { material_id: 23, test_id: 59, finish: 'No finish' },
  { material_id: 24, test_id: 60, finish: 'No finish' },
  { material_id: 25, test_id: 61, finish: 'No finish' },
  { material_id: 26, test_id: 62, finish: 'No finish' },
  { material_id: 27, test_id: 63, finish: 'No finish' },
  { material_id: 28, test_id: 67, finish: 'No finish' },
  { material_id: 28, test_id: 68, finish: 'Painted' },
  { material_id: 62, test_id: 68, finish: 'Painted' },
  { material_id: 28, test_id: 69, finish: 'Polished Transparent' },
  { material_id: 28, test_id: 70, finish: 'Sandblasted Mate' },
  { material_id: 62, test_id: 70, finish: 'Matt Sanding' },
  { material_id: 29, test_id: 71, finish: 'No finish' },
  { material_id: 29, test_id: 72, finish: 'Mirror Polished' },
  { material_id: 62, test_id: 72, finish: 'Mirror Polished' },
  { material_id: 29, test_id: 73, finish: 'Sandblasted' },
  { material_id: 30, test_id: 74, finish: 'No finish' },
  { material_id: 31, test_id: 75, finish: 'No finish' },
  { material_id: 32, test_id: 76, finish: 'No finish' },
  { material_id: 33, test_id: 77, finish: 'No finish' },
  { material_id: 34, test_id: 78, finish: 'No finish' },
  { material_id: 34, test_id: 79, finish: 'Painted' },
  { material_id: 34, test_id: 80, finish: 'Polished Transparent' },
  { material_id: 34, test_id: 81, finish: 'Sandblasted Mate' },
  { material_id: 35, test_id: 82, finish: 'No finish' },
  { material_id: 36, test_id: 83, finish: 'No finish' },
  { material_id: 62, test_id: 83, finish: 'No finish' },
  { material_id: 70, test_id: 83, finish: 'No finish' },
  { material_id: 71, test_id: 83, finish: 'No finish' },
  { material_id: 72, test_id: 83, finish: 'No finish' },
  { material_id: 37, test_id: 84, finish: 'No finish' },
  { material_id: 38, test_id: 85, finish: 'No finish' },
  { material_id: 39, test_id: 86, finish: 'No finish' },
  { material_id: 40, test_id: 87, finish: 'No finish' },
  { material_id: 41, test_id: 88, finish: 'No finish' },
  { material_id: 42, test_id: 89, finish: 'No finish' },
  { material_id: 43, test_id: 90, finish: 'No finish' },
  { material_id: 44, test_id: 91, finish: 'No finish' },
  { material_id: 45, test_id: 92, finish: 'No finish' },
  { material_id: 46, test_id: 93, finish: 'No finish' },
  { material_id: 47, test_id: 94, finish: 'No finish' },
  { material_id: 48, test_id: 95, finish: 'No finish' },
  { material_id: 49, test_id: 96, finish: 'No finish' },
  { material_id: 50, test_id: 97, finish: 'No finish' },
  { material_id: 52, test_id: 98, finish: 'No finish' },
  { material_id: 54, test_id: 99, finish: 'No finish' },
  { material_id: 55, test_id: 100, finish: 'No finish' },
];
