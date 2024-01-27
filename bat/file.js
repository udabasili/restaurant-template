delay = 0.03;

freq = 3;

amp = 50;

decay = 10;

Speed = 0.6;

myDelay = delay * textIndex;

t = (time - inPoint) * Speed - myDelay;

if (t >= 0) {
	freq;

	amp;

	decay;

	s = (amp * Math.cos(freq * t * 2 * Math.PI)) / Math.exp(decay * t);

	[s, s];
} else {
	value;
}
