module.exports = function override(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      "buffer": require.resolve("buffer/"),
      "timers": require.resolve("timers-browserify")
    };
    return config;
  };
  