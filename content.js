const apply = (enabled) => document.documentElement.toggleAttribute("data-sheets-dark-off", !enabled);

chrome.storage.local.get({ enabled: true }, ({ enabled }) => apply(enabled));
chrome.storage.onChanged.addListener((changes) => {
  if (changes.enabled) apply(changes.enabled.newValue);
});
