export const horoscopeRequest = (params) => ({
    type: 'API_REQUEST',
    payload: {
        sign: params.sign,
        day: params.day
    }
});