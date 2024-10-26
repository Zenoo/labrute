import sfxJson from '../../assets/sfx.json';

// Interface definition for data
interface SoundSprite {
  start: number;
  end: number;
  loop: boolean;
}

interface AudioSpriteData {
  resources: string[];
  spritemap: {
    [key: string]: SoundSprite;
  };
}

const sfx: AudioSpriteData = {
  resources: sfxJson.resources.map((source : string) => `/sfx/${source}`),
  spritemap: sfxJson.spritemap

};

export default sfx;
