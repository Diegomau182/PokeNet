import Constant from "expo-constants";

const ENV = {
    dev: {
        apiKey: "AIzaSyB-PF8WdFd6R2cA2b9RTRzSGdqgqzWXL9c",
        authDomain: "pokenet-pokemon-app.firebaseapp.com",
        projectId: "pokenet-pokemon-app",
        storageBucket: "pokenet-pokemon-app.appspot.com",
        messagingSenderId: "624399918774",
        appId: "1:624399918774:web:8a08493649f87f0073a817"
    },
    production: {
        apiKey: "AIzaSyB-PF8WdFd6R2cA2b9RTRzSGdqgqzWXL9c",
        authDomain: "pokenet-pokemon-app.firebaseapp.com",
        projectId: "pokenet-pokemon-app",
        storageBucket: "pokenet-pokemon-app.appspot.com",
        messagingSenderId: "624399918774",
        appId: "1:624399918774:web:8a08493649f87f0073a817"
    }
};

const getEnvVars = (env = Constant.manifest.releaseChannel) => {
    if (__DEV__) return ENV.dev;
    else if (env == "production" || env == "default")
    return ENV.production;
};

export default getEnvVars;
