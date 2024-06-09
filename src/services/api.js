const api = {
  getQuests: async () => {
    const response = await fetch('./quests.json');
    if (!response.ok) {
      throw new Error('Network response was not ok' + response.statusText);
    }
    const data = await response.json();
    return data.quests;
  },
};

export default api;
