import { readable } from "svelte/store";


const URL = "/cdn-cgi/access/get-identity"

async function get_id_token(){
    try {
        const response = await fetch(URL);
        return response.json();
    }
    catch (error) {
        console.log(error);
    }
}

export const ID = readable(
    {},
    (set) => {
        get_id_token().then(d=>set(d));
    }
)