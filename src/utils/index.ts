import browser from "webextension-polyfill";

export const createNotification = (message: string): void => {
  browser.notifications.create({
    type: "basic",
    title: "Copy Guard",
    message,
    iconUrl: "icon128.png",
  });
};

export const minifyString = (str: string) => str.replace(/\s+/g, "");

export const removePrefixWWW = (hostname: string) => {
  if (hostname.startsWith("www.")) return hostname.replace("www.", "");
  return hostname;
};