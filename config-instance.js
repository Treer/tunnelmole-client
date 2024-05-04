const instanceConfig = {
    hostip: {
        //endpoint: "wss://service.tunnelmole.com:8083",
        //httpEndpoint: "https://service.tunnelmole.com"
        // speedtest.keazilla.net resolves to LAN address rather than involving internet
        endpoint: "ws://speedtest.keazilla.net:8083",
        httpEndpoint: "http://speedtest.keazilla.net:8003"
    },
    runtime: {
        debug: true,
        enableLogging: true
    }
};
export default instanceConfig;
//# sourceMappingURL=config-instance.js.map
