import { Filter } from 'pixi.js';

const COLOR_OFFSET_VERTEX = `
in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition(void)
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;

    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0 * uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(void)
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;

const COLOR_OFFSET_FRAGMENT = `
in vec2 vTextureCoord;

out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec3 offset;
uniform vec3 mult;

void main(void)
{
  vec4 color = texture(uTexture, vTextureCoord);

  if (color.a <= 0.0) {
    finalColor = vec4(0.0);
    return;
  }

  vec3 unmultiplied = color.rgb / color.a;
  vec3 shifted = unmultiplied * mult + (offset / 255.0);

  finalColor = vec4(shifted * color.a, color.a);
}
`;

export const createColorOffsetFilter = (
  r: number,
  g: number,
  b: number,
  filterName = 'color-offset-filter',
) => Filter.from({
  gl: {
    vertex: COLOR_OFFSET_VERTEX,
    fragment: COLOR_OFFSET_FRAGMENT,
    name: filterName,
  },
  resources: {
    colorOffsetUniforms: {
      offset: { value: [r, g, b], type: 'vec3<f32>' },
      mult: { value: [1, 1, 1], type: 'vec3<f32>' },
    },
  },
});
