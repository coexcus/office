import { readable } from "svelte/store";

export const ONLINE = readable(navigator.onLine, (set) => {
    const handler = () => set(navigator.onLine);
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);
    return () => {
        window.removeEventListener("online", handler);
        window.removeEventListener("offline", handler);
    };
});