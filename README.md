# Trello Power-Up Type Definition

This is an open-source type-definition file for Trello Power-Ups. To use this library you can import this into your project and place it in a \types folder in the root of your project and then if you are using VSCode, reference it in your code, by placing this at the top of your client.js file:

```javascript
/// <reference path="./types/trello.d.js" />
```

## Usage

I have only used this in VSCode, so I am not sure how well this will work in other code editors. After adding the TS file to your project and creating a link to the top of the client.js file, you can then begin to document your code via JSDoc to get Type support. 

More samples and examples might come, and any suggested by you are welcome, but this library technically covers most of the Trello Object definitions outlined from the [online documentation](https://developer.atlassian.com/cloud/trello/power-ups/). 

Here is how to start a **client.js** which will place a board button on the board, and issue a confirm popup when clicked:

```javascript
/* global TrelloPowerUp */
/// <reference path="../types/trello.d.js" />
/** @type {TrelloPowerUp} */
const tpu = window.TrelloPowerUp;
tpu.initialize({
    'board-buttons': createBoardButton,
});
/**
 * Primary board button function
 * @type {TrelloBoardButtonFunction}
 * @param {TrelloObject} t
 * @param {TrelloCallbackOptions} opts
 * @returns {BoardButtonOption[]}
const createBoardButton = async (t,opts) => {
 /** @type {BoardButtonOption[]} */
 const buttons = [];
 /** @type {BoardButtonOption} **/
 const bb = {
    text: "Sample Board Button",
    icon: {
        dark: "https://.../images/dark.png"), 
        light: "https://.../images/light.png") 
    },
    condition: 'edit',
    callback: onBtnClick
 };
 buttons.push(bb);
 return buttons;
}
/**
 * User clicked the board button - open a popup
 * @type {TrelloDefaultCallback}
 * @param {TrelloObject} t
 * @param {TrelloCallbackOptions} opts
 */
const onBtnClick = async(t,opts) => {
 /** @type {TrelloPopupConfirmOptions} */
 const confirmPopup = {
     confirmText: "Yes",
     message: "Click 'Yes' if you agree?",
     onConfirm: (tr)=>tr.closePopup(),
     title: "Popup Sample",
     type: 'confirm'
 }
 return t.popup(confirmPopup);
}
```

## Versions

 - v1.0.1.20221122 - first drop (beta)

## Feedback

This is a work in progress, so please submit feedback to [Issues](https://github.com/davecra/Trello-Power-Up-TypeDefs/issues).

## Future

Very soon I will be adding this to NPM so you can install it from there as well. Just got to get a few more of the issues worked out and then setup the release pipeline, and vioa, I will be backj here with the instructions for installing using NPM.
