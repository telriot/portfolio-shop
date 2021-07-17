const EXPIRATION_WINDOW_SECONDS = 48 * 60 * 60;
/**
 *
 * @param seconds Defaults to 48*60*60, the time before expiration
 * @returns an ISO date string
 */
export const buildExpirationDate = (
	seconds = EXPIRATION_WINDOW_SECONDS
): string => {
	const expiration = new Date();
	expiration.setSeconds(expiration.getSeconds() + seconds);
	return expiration.toISOString();
};
