const appStage = import.meta.env.VITE_APP_STAGE || 'prod';

const stages = {
    dev: {
        apiUrl: "",
        cdnHost: "",
    },
    prod: {
        apiUrl: "",
        cdnHost: "",
    },
};

export const stage = stages[appStage];