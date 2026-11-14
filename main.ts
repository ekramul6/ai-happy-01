// ai-happy-01 entry (Node 22, standard library only).
// The image beside this file is copied to the output path, byte for byte.
// A pure copy is deterministic by construction: no timestamps, no random
// bytes, so two runs write identical files. The image itself is a warm,
// joyful scene: a small fluffy robot with glowing happy eyes, a leaping
// golden retriever puppy nuzzling it, and a laughing child offering it a
// sunflower in golden autumn light.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
