import { DOJO_UNLOCKS } from "@labrute/core";

export const getDojoRank = (pupilsCount: number | undefined) => {
  if (!pupilsCount) {
    return null;
  }

  for (let i = DOJO_UNLOCKS.length - 1; i >= 0; i--) {
    const requirement = DOJO_UNLOCKS[i];
    if (!requirement) continue;

    if (pupilsCount >= requirement) {
      return i + 1; // Ranks are 1-indexed
    }
  }

  return null;
}
