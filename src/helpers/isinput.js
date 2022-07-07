export const isVin = (inpValue) => {
	return inpValue && inpValue.length === 17 && /^[a-zA-Z0-9]+$/.test(inpValue);
};
