# Baiscope Download Link Redirector - Chrome Extension

This Chrome extension redirects links from `baiscope.lk` to their corresponding pages on `baiscopedownload.link`. This can be useful if you prefer to access downloads directly on the Baiscope website.

## Installation

1. **Clone the Repository:**
    ```bash
    git clone https://your-github-username/baiscope-download-redirector.git
    ```
   Use code with caution. Replace `https://your-github-username/baiscope-download-redirector.git` with the actual URL of your Git repository.

2. **Load the Extension:**
    - Open Chrome and navigate to `chrome://extensions/`.
    - Enable "Developer mode" in the top right corner.
    - Click "Load unpacked" and select the folder containing the extension's files (usually the root directory of your cloned repository).

## How it Works

The extension utilizes the Chrome WebExtension API's `webRequest` listener to intercept requests to `baiscopedownload.link` domains. When a matching request is detected, the extension rewrites the URL to point to the corresponding page on `baiscope.lk` before the request is sent.

## Disclaimer

- This extension is provided for educational purposes only and is not affiliated with Baiscope.
- Use the extension at your own risk. The developer assumes no responsibility for any issues arising from its use.

## Development

Feel free to modify the extension's behavior by editing the JavaScript files within the `src` directory. You can test your changes by reloading the extension in Chrome's extensions settings.

## Additional Notes

- Consider adding a manifest version number to the `manifest.json` file for future updates.
- You might want to explore packaging the extension as a `.crx` file for easier distribution. Refer to the Chrome WebExtensions documentation for guidance on packaging: [Chrome WebExtensions Documentation](https://developer.chrome.com/docs/extensions/get-started)
