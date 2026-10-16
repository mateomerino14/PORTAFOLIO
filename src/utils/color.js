const hexBase = 16;
const channelMax = 255;
const lumaWeights = {red: 0.2126, green: 0.7152, blue: 0.0722};

export const relativeLuminance = (hex) => {
  const value = parseInt(hex, hexBase);
  const red = (value >> 16) & channelMax;
  const green = (value >> 8) & channelMax;
  const blue = value & channelMax;
  return (lumaWeights.red * red + lumaWeights.green * green + lumaWeights.blue * blue) / channelMax;
};
