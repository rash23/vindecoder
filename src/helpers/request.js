const generateFetchError = (response) => {
	const error = new Error('Request Failed');
	error.statusCode = response.status;
	error.statusMessage = response.statusText;

	return error;
};

export const request = async (url, initRequest) => {
	const response = await fetch(url, initRequest);
	if (response.ok) {
		const contentType = response.headers.get('content-type');

		if (contentType?.includes('application/json')) {
			return await response.json();
		}

		return await response.text();
	}
	throw generateFetchError(response);
};
