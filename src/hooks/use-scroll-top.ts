import { useEffect } from "react";

export const useScrollTop = () => {
    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
    }, []);
}