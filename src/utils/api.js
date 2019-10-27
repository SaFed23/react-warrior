export const API_URL = "https://api.themoviedb.org/3";

export const API_KEY_3 = "3f4ca4f3a9750da53450646ced312397";

export const API_KEY_4 =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjRjYTRmM2E5NzUwZGE1MzQ1MDY0NmNlZDMxMjM5NyIsInN1YiI6IjVhYzlmNWRkOTI1MTQxNjJhZTA1Njk0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fc4f9DVB6pFWh6hIjYe0NCC4pImdmNzDIfi_3Nb3tC4";

export const callApi = (url = "", options = {}) => {
    return new Promise((resolve, reject) => {
        fetch(`${API_URL}/${url}`, options).then(response => {
            if (response.status < 400) return response.json()
            else throw response.json();
        }).then(data => {
            resolve(data);
        }).catch(error => {
            reject(error);
        });
    });
}