let fakeCache = {}

async function fakeNetwork(key) {
    if (!key) {
      fakeCache = {};
    }
  
    if (fakeCache[key]) {
      return;
    }
  
    fakeCache[key] = true;
    return new Promise(res => {
      setTimeout(res, Math.random() * 800);
    });
}