cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.intelegate.cordova.plugin.LocalStoragePlugin/www/LocalStoragePlugin.js",
        "id": "com.intelegate.cordova.plugin.LocalStoragePlugin.LocalStoragePlugin",
        "clobbers": [
            "LocalStoragePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.intelegate.cordova.plugin.LocalStoragePlugin": "0.0.4"
}
// BOTTOM OF METADATA
});