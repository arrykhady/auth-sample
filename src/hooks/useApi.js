import React, { useState, useEffect, useReducer } from 'react';

const DEFAULT_STATE = {
    loading: false, error: "", success: false, data: null
}

const FAKE_USER = {
    id: 1,
    name: "Leanne Graham",
    username: "Leanne",
    email: "leanne@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031",
    website: "hildegard.org"
}

export const useApi = (initialRequest = "") => {

    const [request, setRequest] = useState(initialRequest)

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'FETCH_INIT':
                return { ...state, loading: true, success: false, error: "" };
            case 'FETCH_SUCCESS':
                return { ...state, loading: false, error: "", success: true, data: action.payload };
            case 'FETCH_FAILURE':
                return { ...state, loading: false, success: false, error: action.payload };
            case 'FETCH_RESET':
                return { ...state, loading: false, success: false, error: "" };
            default:
                return { ...state };
        }
    }, DEFAULT_STATE)

    const onRequested = (newRequest) => {
        setRequest(newRequest);
    }

    useEffect(() => {
        if (!request || (request.trim() === "")) return;

        let unmounted = false;
        let timeout = null;

        try {
            dispatch({ type: 'FETCH_INIT' })

            timeout = setTimeout(() => {
                let requestData = JSON.parse(request)
                let result = { user: { ...FAKE_USER, ...requestData }, token: "USERSECRETTOKEN" }
                if (!unmounted) dispatch({ type: 'FETCH_SUCCESS', payload: result })
            }, 2000);
        } catch (error) {
            console.error(error)
            if (!unmounted) dispatch({ type: 'FETCH_FAILURE', payload: error.message })
        }

        return () => {
            unmounted = true;
            if (timeout) clearTimeout(timeout);
        }
    }, [request])


    return { ...state, onRequested }
}