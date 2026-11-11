const setBadge = (enabled) => {
  chrome.action.setBadgeText({ text: enabled ? "" : "OFF" });
  chrome.action.setBadgeBackgroundColor({ color: "#5f6368" });
};

const syncBadge = () => chrome.storage.local.get({ enabled: true }, ({ enabled }) => setBadge(enabled));

chrome.runtime.onInstalled.addListener(syncBadge);
chrome.runtime.onStartup.addListener(syncBadge);

chrome.action.onClicked.addListener(async () => {
  const { enabled } = await chrome.storage.local.get({ enabled: true });
  await chrome.storage.local.set({ enabled: !enabled });
  setBadge(!enabled);
});
