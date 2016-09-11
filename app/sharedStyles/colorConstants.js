function colorMixer(red, green, blue, opacity = 1) {
	return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}

export const orange = (opacity) => colorMixer(255, 188, 103, opacity);
export const red = (opacity) => colorMixer(218, 114, 126, opacity);
export const maroon = (opacity) => colorMixer(172, 108, 130, opacity);
export const purple = (opacity) => colorMixer(104, 92, 121, opacity);
export const blue = (opacity) => colorMixer(69, 92, 123, opacity);
export const black = (opacity) => colorMixer(93, 93, 93, opacity);