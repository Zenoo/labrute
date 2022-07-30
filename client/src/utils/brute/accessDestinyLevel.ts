import { Destiny } from '@backend/types';

const accessDestinyLevel = (destiny: Destiny, level: number) => {
  if (level < 1) {
    throw new Error('level must be greater than 0');
  }
  let currentLevel = 1;
  let { choices } = destiny;

  while (currentLevel < level - 1) {
    const chosenChoice = choices.find((choice) => choice.chosen);
    if (!chosenChoice) {
      throw new Error('destiny not complete');
    }
    if (chosenChoice.nextChoices) {
      choices = chosenChoice.nextChoices;
    } else {
      return null;
    }

    currentLevel += 1;
  }

  return choices;
};

export default accessDestinyLevel;