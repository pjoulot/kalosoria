import settingsDefinition from '../settings.json';

export function getSettings() {
    return '';
}

export function getSettingsSchema() {
    let schema = {};
    for (const property in settingsDefinition) {
        schema[property] = settingsDefinition[property]['schema'];
    }
    return schema;
}

export function getSettingsStorage() {
    const Store = require('electron-store');
    const store = new Store();
    return store;
}