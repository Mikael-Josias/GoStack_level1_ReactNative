import axios from 'axios';

const api = axios.create({
    baseURL: "http://10.0.2.2:3333",
});

export default api;

/**
 * IOS com Emulador: localhost
 * IOS com Físico: IP da máquina
 * 
 * ANDROID com Emulador: localhost (adb reverse)
 * ANDROID com Emulador: 10.0.2.2 (Android Studio)
 * ANDROID com Emulador: 10.0.3.2 (Genymotion)
 * ANDROID com Físico: IP da máquina
 */