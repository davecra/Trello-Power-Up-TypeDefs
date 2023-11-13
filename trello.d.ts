/********************************************************************************
 * Trello Object Definitions File
 * @author David E. Craig
 * @version 1.0.1.20231113
 * @description This is a types description file for Trello Power-Up's.
 * @summary This type description file is provided as-is. It is provided to the
 *          community to help built Power-Ups. For more information please see:
 *          https://github.com/davecra/Trello-Power-Up-TypeDefs
 * @copyright (c) 2023 David E. Craig, dba Kryl Solutions
 * @license: MIT, 2023
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 ********************************************************************************/
/**
 * @typedef {Object} TrelloObject
 * @property {TrelloObjectGet} get - Get data at a specific scope and visibility
 * @property {TrelloObjectSet} set - Used to store data within the Trello Power-Up platform.
 * @property {TrelloObjectGetAll} getAll - Return all pluginData for all scopes & visibilities currently in context
 * @property {TrelloObjectRemove} remove - You can remove a key at a specific scope, or you can remove multiple keys at once.
 * @property {TrelloApiClientObject} getRestApi - Get an instance of the API client.
 * @property {TrelloBoardFunction} board - Ask Trello for information on specific properties of the current board.
 * @property {TrelloListFunction} list - Gets the information about the current list
 * @property {TrelloListsFunction} lists - Get information on all open lists on the board. Takes the same field options as t.list.
 * @property {TrelloCardFunction} card - Get the information on the current card
 * @property {TrelloCardsFunction} cards - Get information on all open cards on the board. Takes the same field options as t.card.
 * @property {TrelloMemberFunction} member - Get the information about the current member
 * @property {TrelloOrganizationFunction} organization - Get information about the organization (Workspace) that the current board is in (if any).
 * @property {TrelloMemberCanWriteToModelFunction} memberCanWriteToModel - Synchronously determine whether the current member can write data on a certain model.
 * @property {TrelloIsMemberSignedInFunction} isMemberSignedIn - Synchronously determine if your Power-Up is being used by a logged in Trello member.
 * @property {TrelloLocalizeKeyFunction} localizeKey - Given a key, and optional replacement data, synchronously returns the output of window.localizer.localize(key, data)
 * @property {TrelloLocalizeKeysFunction} localizeKeys - Synchronously localizes multiple keys
 * @property {TrelloLocalizeNodeFunction} localizeNode - Synchronously inserts localized texts into DOM nodes starting at the provided node and all of its children.
 * @property {TrelloArgFunction} arg - When you create additional iframes, such as for attachment-sections, you can pass yourself arguments. Those arguments can be retrieved on that page once it is loaded via t.arg
 * @property {TrelloAttachFunction} attach - With t.attach you can attach a URL to a card, as long as you are in the context of a particular card.
 * @property {TrelloAuthWindowFunction} authorize - Sometimes, such as to complete an oauth flow, you need to show a page in its own new window. For authentication, this is usually because oauth pages (for security reasons) cannot be displayed inside of iframes.
 * @property {TrelloGetContextFunction} getContext - Synchronously get the current context for t
 * @property {TrelloJwtFunction} jwt - Asynchronously request a signed JWT from Trello for the current member. The purpose of these JWTs is for you to be able to secure the communication between your Power-Up and your server.
 * @property {TrelloNotifyParentFunction} notifyParent - Calling this method from that popup will trigger Trello to run the callback in the parent
 * @property {TrelloRenderFunction} render - make sure any logic that updates your UI in visible iframes with changes should live in or be triggered by t.render. Trello will re-call t.render whenever something changes that we think might be relevant.
 * @property {TrelloSignUrlFunction} signUrl - Add current context data to a URL so that (as long as it is opened by Trello) the page will continue to be able to communicate with Trello via the Power-Up interface.
 * @property {TrelloAlertFunction} alert - to notify a user of something. Please don't overuse.
 * @property {Function} hideAlert - you can use an alert with a long duration, and when the operation completes, you can hide the alert manually by calling t.hideAlert()
 * @property {TrelloBoardBarFunction} boardBar - allows you to load an iframe across the bottom of the board. You are allowed any height you want, up to 60% of the height of the window (this includes the height of the header of the board bar).
 * @property {Function} closeBoardBar - if you need to close the board bar programmatically you can do so by calling t.closeBoardBar()
 * @property {TrelloModalFunction} modal - lets you display an iframe directly on top of Trello. The modal comes in two widths, fullscreen: true.
 * @property {Function} closeModal - If you have a modal open, you can call t.closeModal() to close it.
 * @property {TrelloUpdateModalFunction} updateModal - If you have a modal open, you can update parts of it using t.updateModal({options}).
 * @property {TrelloNavigateFunction} navigate - Lets you tell Trello to navigate to an arbitrary Trello URL, such as that of a card or board. Will not let you navigate the page to a non-Trello URL.
 * @property {TrelloShowCardFunction} showCard - Let's you tell Trello to open a specific card as long as that card is both on the current board, and not archived.
 * @property {Function} hideCard - Used to close a card if there is one currently open.
 * @property {TrelloPopupFunction} popup - The real workhorse of the UI controls available to your Power-Up, the popup lets you present options or controls to the user without disrupting their context. Popups can be stacked, meaning you can have users navigate through more than one if necessary and a back control comes built in. You can control the height of a popup, but the width is fixed by Trello.
 * @property {Function} closePopup - Close an open popup.
 * @property {Function} back - Returns to the previous popup.
 * @property {TrelloSizeToFunction} sizeTo - You'll almost always need a way to tell Trello that the size of the content in one of your iframes has changed, or maybe doesn't perfectly line up with the height you requested when instantiating the iframe.
 * @property {TrelloSafeFunction} safe - Escapes a string for insertion into HTML, replacing &, <, >, ", and ' characters.
 * @property {TrelloStoreSecretFunction} storeSecret - To store sensitive information, such as an oauth token to a service other than Trello.
 * @property {TrelloLoadSecretFunction} loadSecret - To retrieve secrets that you have stored via t.storeSecret. It will handle decrypting the secret before handing it back to you.
 * @property {TrelloClearSecretFunction} clearSecret - You can use this method to remove a locally stored secret.
 */
/**
 * @callback TrelloStoreSecretFunction
 * @param {String} key
 * @param {String} token
 */
/**
 * @callback TrelloLoadSecretFunction
 * @param {String} key
 * @returns {String}
 */
/**
 * @callback TrelloClearSecretFunction
 * @param {String} key
 */
/**
 * @typedef {Object} TrelloPowerUp
 * @property {TrelloInitializeFunction} initialize
 * @property {TrelloIFrameFunction} iframe
 */
/**
 * @callback TrelloIFrameFunction
 * @param {TrelloAuthenticationOptions} opts // for authentication
 * @returns {TrelloObject}
 */
/**
 * @typedef {Object} TrelloAuthenticationOptions
 * @property {String} apiKey
 * @property {String} appName
 */
/**
 * @callback TrelloDefaultCallback
 * @param {TrelloObject} t
 * @param {TrelloCallbackOptions} opts
 * @returns {TrelloDefaultCallback}
 */
/**
 * @callback TrelloIframeFunction
 * @returns {TrelloDefaultCallback}
 */
/**
 * @callback TrelloInitializeFunction
 * @param {...( {'attachment-sections':TrelloAttachmentSectionFunction} | {'attachment-thumbnail':TrelloAttachmentThumbnailFunction} |
 *              {'authorization-status':TrelloAuthorizationStatusFunction} | {'board-buttons':TrelloBoardButtonFunction} |
 *              {'card-back-section':TrelloCardBackSectionFunction} | {'card-badges':TrelloCardBadgesFunction} | {'card-buttons':TrelloCardButtonsFunction} |
 *              {'card-detail-badges':TrelloDetailBadgesFunction} | {'card-from-url':TrelloCardFromUrlFunction} | {'format-url':TrelloFormatUrlFunction} |
 *              {'list-actions':TrelloListActionsFunction} | {'list-sorters':TrelloListSortersFunction} | {'on-enable':TrelloDefaultCallback} |
 *              {'on-disable':TrelloDefaultCallback} | {'remove-data':TrelloDefaultCallback} | {'save-attachment':TrelloDefaultCallback} |
 *              {'show-authorization':TrelloDefaultCallback} | {'show-settings':TrelloDefaultCallback})} capability
 * @param {{apiKey:String, appName:String}} opts // for authentication
 */
/**
 * @callback TrelloListSortersFunction - Max 5 Sorters Allowed. If you return more than five list sorters, Trello will only display the first five.
 * @param {TrelloObject} t
 * @param {TrelloCallbackOptions} opts - opts.cards contains all card objects in the list
 * @returns {TrelloListActionsOption[]}
 */
/**
 * @callback TrelloListActionsFunction
 * @param {TrelloObject} t
 * @param {TrelloCallbackOptions} opts
 * @returns {TrelloListActionsOption}
 */
/**
 * @typedef {Object} TrelloListActionsOption
 * @property {String} text	- The text of the action. Tip: Keep it short, as Trello will not wrap the text, and it will cut off with an ellipsis. Tip: If clicking the action will open a popup or modal, the text should end in an ellipsis.
 * @property {Function} callback - A function that will be called in response to a user clicking on the action.
 */
/**
 * @callback TrelloFormatUrlFunction
 * @param {TrelloObject} t
 * @param {TrelloCallbackOptions} opts - contains the opts.url we care about
 * @returns {TrelloFormatUrlOption}
 */
/**
 * @typedef {Object} TrelloFormatUrlOption
 * @property {String} icon - don't use a colored icon here
 * @property {String} text
 * @property {String} subtext
 * @property {TrelloImageOption} image - background-size value
 * @property {TrelloItemsAction[]} Actions
 * thumbnail: COLOR_ICON // Deprecated - OK to use color icon here
 */
/**
 * @typedef {Object} TrelloImageOption
 * @property {String} url
 * @property {'contain' | 'original' | 'cover'} size
 */
/**
 * @callback TrelloCardFromUrlFunction
 * @param {TrelloObject} t
 * @param {TrelloCallbackOptions} opts
 * @returns {TrelloCard}
 */
/**
 * @callback TrelloDetailBadgesFunction
 * @param {TrelloObject} t
 * @param {TrelloCallbackOptions} opts
 * @returns {TrelloDetailBadgeOption[]}
 */
/**
 * @typedef {Object} TrelloDetailBadgeOption
 * @property {Function} dynamic	- A function that returns a single badge object, or a Promise that resolves to one. Only use a dynamic badge if the data the badge is showing is expected to change outside of Trello. For a dynamic badge this is the only property necessary to return.
 * @property {Number} refresh - Only relevant for the result of a dynamic badge. The number of seconds for Trello to wait before re-running the dynamic function provided. Minimum of 10. Try to keep this as high as reasonable.
 * @property {String} text	- Text shown inside of the badge
 * @property {String} [title] - Optional text shown above the badge
 * @property {'blue' | 'green' | 'orange' | 'red' | 'yellow' | 'purple' | 'pink' | 'sky' | 'lime' | 'light-gray'} [color] - Optional color for the badge.
 * @property {TrelloDefaultCallback} [callback] - Optional, mutually exclusive with url. If provided, a function to be called when the badge is clicked
 * @property {String} [url]	- Optional, mutually exclusive with callback. If provided, a URL to navigate to when the badge is clicked
 * @property {String} [target]	- Optional, can be used in conjunction with url to provide a target frame name for the given url
 */
/**
 * @callback TrelloCardButtonsFunction
 * @param {TrelloObject} t
 * @param {TrelloCallbackOptions} opts
 * @returns {TrelloCardButtonOption[]}
 */
/**
 * @typedef {Object} TrelloCardButtonOption
 * @property {String} icon	- The url to an icon for the button. Trello will add a color=[hex] query parameter which you can use to make the icon color match ours. This is easiest to do with an SVG icon.
 * @property {String} text	- The name of the button, keep it short and sweet
 * @property {TrelloDisplayCondition} condition - Default: edit. To what types of users the button should be displayed. admin - User is an admin on the board. edit - User can edit the board. readOnly - User can not edit the board. signedIn - User is logged into Trello. signedOut - User is not logged into Trello. always - Always show.
 * @property {Function} [callback] - Optional function that will be called on click of the button
 * @property {String} [url]	- Optional href for the button
 * @property {String} [target] - Optional with use of url property to add a target to the anchor tag.
 */
/**
 * @typedef {'admin' | 'edit' | 'readOnly' | 'signedIn' | 'signedOut' | 'always'} TrelloDisplayCondition
 */
/**
 * @callback TrelloCardBadgesFunction
 * @param {TrelloObject} t
 * @param {TrelloCallbackOptions} opts
 * @returns {TrelloCardBadgesOption[]}
 */
/**
 * @typedef {Object} TrelloCardBadgesOption
 * @property {Function} dynamic - A function that returns a single badge object, or a Promise that resolves to one. Only use a dynamic badge if the data the badge is showing is expected to change outside of Trello.
 * @property {Number} refresh - Only relevant for the result of a dynamic badge. # of seconds for Trello to wait before re-running the dynamic function. Minimum of 10. Try to keep this as high as reasonable.
 * @property {String} [text]  - Optional text to display on the badge
 * @property {String} [icon] - Optional icon to show with the badge. When using a colored badge, make sure the color of the icon is white or gray as appropriate.
 * @property {TrelloColor} [color] - Optional color for the badge.
 */
/**
 * @callback TrelloAttachmentSectionFunction
 * @param {TrelloObject} t
 * @param {{entries:TrelloAttachmentDataType[]}} opts
 * @returns {TrelloClaimedItem[]}
 */
/**
 * @callback TrelloAttachmentThumbnailFunction
 * @param {TrelloObject} t
 * @param {TrelloCallbackOptions} opts
 * @returns {TrelloThumbnailItem}
 */
/**
 * @callback TrelloAuthorizationStatusFunction
 * @param {TrelloObject} t
 * @param {TrelloCallbackOptions} opts
 * @returns {TrelloAuthStatus}
 */
/**
 * @callback TrelloBoardButtonFunction
 * @param {TrelloObject} t
 * @param {TrelloCallbackOptions} opts
 * @returns {TrelloBoardButtonOption[]}
 */
/**
 * @callback TrelloCardBackSectionFunction
 * @param {TrelloObject} t
 * @param {TrelloCallbackOptions} opts
 * @returns {TrelloCardBackSectionOption}
 */
/**
 * @typedef {Object} TrelloCardBackSectionOption card-back-section
 * @property {String} title	- card-back-section: Rendered by Trello above the iframe.
 * @property {String} icon - card-back-section: Expected to be an icon that will be rendered to the left of your title on the card back.
 * @property {TrelloReturnContentType} content - card-back-section
 * @property {TrelloItemsAction} action	- card-back-section: An action object is shown action on the right above the card back section.
 */
/**
 * @typedef {Object} TrelloBoardButtonOption
 * @property {TrelloIconType} icon - board-buttons: Object with urls for icons to be displayed on light and dark backgrounds.
 * @property {String} text	- board-buttons: The name of the button, keep it short and sweet
 * @property {TrelloDisplayCondition} condition	- board-buttons: Default 'edit': When the button should be displayed. admin - User is an admin of the board, edit - User can edit the board, readOnly - User can not edit the board, signedIn - User is logged into Trello, signedOut - User is not logged into Trello, always - Always show.
 * @property {TrelloDefaultCallback} [callback] board-buttons: Optional function that will be called on click of the button
 * @property {String} [url]	board-buttons: Optional href for the button
 * @property {String} [target] board-buttons: Optional with use of url property to add a target to the anchor tag
 */
/**
 * @typedef {Object} TrelloIconType
 * @property {String} dark
 * @property {String} light
 */
/**
 * @typedef {Object} TrelloAuthStatus
 * @property {Boolean} authorized - authorization-status
 */
/**
 * @typedef {Object} TrelloThumbnailItem
 * @property {String} title - attachment-thumbnail
 * @property {TrelloAttachmentImage} image - attachment-thumbnail
 * @property {Date} modified - attachment-thumbnail
 * @property {Date} created - attachment-thumbnail
 * @property {String} createdBy - attachment-thumbnail
 * @property {String} modifiedBy - attachment-thumbnail
 * @property {Function} initialize - type:'iframe',url:String
 */
/**
 * @typedef {Object} TrelloAttachmentImage
 * @property {String} url
 * @property {Boolean} logo
 */
/**
 * @typedef {Object} TrelloClaimedItem
 * @property {String} id - attachment-sections
 * @property {TrelloAttachmentDataType[]} claimed - attachment-sections
 * @property {String} icon - attachment-sections
 * @property {String} title - attachment-sections
 * @property {TrelloReturnContentType} content - attachment-sections
 */
/**
 * @typedef {Object} TrelloReturnContentType
 * @property {'iframe'} type
 * @property {String} url - use t.signUrl
 * @property {Number} height
 */
/**
 * @typedef {Object} TrelloCallbackOptions
 * @property {String} url
 * @property {TrelloAttachmentDataType[]} entries
 * @property {TrelloCard[]} cards
 * @property {Date} date
 * @property {String} search
 */
/**
 * @callback TrelloSafeFunction
 * @param {String} string
 */
/**
 * @callback TrelloSizeToFunction
 * @param {String | HTMLElement | Number} - A DOM query selector that will select the node to measure and use the height of t.sizeTo('#content'), or a DOM element that will be measured and we will use the height of t.sizeTo(document.body), or a positive number that will be used directly for the height t.sizeTo(625)
 */
/**
 * @callback TrelloPopupFunction
 * @param {TrelloPopupListOptions | TrelloPopupSearchOptions | TrelloPopupIFrameOptions | TrelloPopupDateTimeOptions | TrelloPopupConfirmOptions} opts
 */
/**
 * @typedef {Object} TrelloPopupListOptions
 * @property {String} title
 * @property {TrelloItemsAction[]} items
 * @property {MouseEvent} [mouseEvent] - only needed if out of context
 */
/**
 * @typedef {Object} TrelloItemsAction
 * @property {String} text
 * @property {TrelloDefaultCallback} callback
 */
/**
 * @typedef {Object} TrelloSearchItemOption
 * @property {String} text - Will be searched by Trello when the user enters a value into the text field.
 * @property {TrelloDefaultCallback} callback - Called by Trello it when the user clicks the item.
 * @property {String} url - Trello will open the URL when the user selects the item.
 * @property {Boolean} alwaysVisible - Optional. Determines whether the item should always be displayed, regardless of whether it matches the search, or not.
 */
/**
 * @typedef {Object} TrelloSearchOption
 * @property {Number} count - Determines the number of items to display when searching
 * @property {String} placeholder - Text to display in search text input when it is empty.
 * @property {String} empty - Text to display when a user is searching but not results found.
 * @property {String} searching - The value to display when the search function is being executed.
 * @property {Number} debounce - When doing dynamic search, the number of milliseconds to wait after the user has stopped typing before calling the search function. Defaults to 300, also the minimum value.
 */
/**
 * @typedef {Object} TrelloPopupSearchOptions
 * @property {String} title	- Displayed at the top of the popup.
 * @property {TrelloSearchItemOption[] | Function} items - Array of Objects or Function that returns a Promise. NOTE: For dynamic searching, you can pass the items key a function that will be called when the user begins typing. It should resolve to an array containing objects with the keys defined above.
 * @property {TrelloSearchOption} search - an object that contains the keys from the search
 * @property {MouseEvent} [mouseEvent] - only needed if out of context
 */
/**
 * @typedef {Object} TrelloPopupIFrameOptions
 * @property {String} title
 * @property {String} url
 * @property {JSON} args
 * @property {Number} height
 * @property {MouseEvent} [mouseEvent] - only needed if out of context
 */
/**
 * @typedef {Object} TrelloPopupDateTimeOptions
 * @property {'date' | 'datetime'} type
 * @property {String} title
 * @property {TrelloDefaultCallback} callback - function(t, opts) // opts.date is an ISOString
 * @property {Date} [date]
 * @property {Date} [minDate]
 * @property {Date} [maxDate]
 * @property {MouseEvent} [mouseEvent] - only needed if out of context
 */
/**
 * @typedef {Object} TrelloPopupConfirmOptions
 * @property {'confirm'} type
 * @property {String} title
 * @property {String}  message
 * @property {String} confirmText - text on confirm button
 * @property {TrelloDefaultCallback} onConfirm - function(t, opts)
 * @property {'primary' | 'danger'} [confirmStyle]
 * @property {String} [cancelText] - text on cancel button
 * @property {TrelloDefaultCallback} [onCancel] - function(t, opts)
 * @property {MouseEvent} [mouseEvent] - only needed if out of context
 */
/**
 * @callback TrelloShowCardFunction
 * @param {String} idCard
 */
/**
 * @callback TrelloNavigateFunction
 * @param {TrelloNavigateOptions} opts
 */
/**
 * @typedef {Object} TrelloNavigateOptions
 * @property {String} url
 */
/**
 * @callback TrelloUpdateModalFunction
 * @param {TrelloUpdateModalOptions} opts
 */
/**
 * @typedef {Object} TrelloUpdateModalOptions
 * @property {String} accentColor - A valid hex color (eg, 9900CC) to update the modal header's background color to.
 * @property {TrelloAction[]} actions - array of objects	An array of action objects.
 * @property {Boolean} fullscreen - A boolean used to determine whether the modal should be fullscreen or not.
 * @property {String} title - The string to update the modal's header to.
 */
/**
 * @callback TrelloModalFunction
 * @param {TrelloModalOptions} opts
 */
/**
 * @typedef {Object} TrelloModalOptions
 * @property {String} url - Any valid URL.	The URL of the page to be shown inside of the iframe.
 * @property {String} accentColor - Hex color value or a Trello Brand Color.	Color to be used on top of modal design.
 * @property {Number} height - Positive integer.	Height of the modal.
 * @property {Boolean} fullscreen - True or False	Determines whether the modal should be full width or not.
 * @property {Function} [callback] - Optional. The function to be called if the user closes the modal.
 * @property {String} [title] - Optional.  String to be displayed in header of modal.
 * @property {TrelloAction[]} actions - Array of action items for buttons to be displayed in header of modal.
 * @property {JSON} [args] - Optional. Object of key / values to be passed as query parameters to iframe, accessed using t.arg(key)
 */
/**
 * @callback TrelloBoardBarFunction
 * @param {TrelloBoardBarOptions} opts
 */
/**
 * @typedef {Object} TrelloBoardBarOptions
 * @property {String} url - The url of the page to be loaded into the iframe.
 * @property {Number} height - Height of the board bar in pixels.
 * @property {String} accentColor - Hex color value or a Trello Brand Color. Used as the color of the header.
 * @property {Boolean} resizable - Determines whether the board bar will be resizable by the user. The default value will be false. The initial height will still be determined by the value passed to height, calls to t.sizeTo() will continue to be respected, and the max height of the board bar will continue to be 60%.
 * @property {JSON} [args] - Optional arguments to be passed to the iframe as query parameters.
 * @property {Function} [callback]	Optional function to be called when user closes board bar.
 * @property {String} [title] - Optional string to be displayed as the title in the header of the board bar. Board bar title will default to the name of the Power-Up.
 * @property {TrelloAction[]} [actions] - Optional array of quick action buttons for the header. Up to three allowed, with up to one on the right side.
 */
/**
 * @typedef {Object} TrelloAction
 * @property {String} icon - Valid URL (http or https) of image. Required.
 * @property {String} alt - The string to be used as the alt value for the <img> tag.
 * @property {Function} callback - The function to be called when a user clicks on the icon.
 * @property {String} position - Can be left or right and determines which side of the header the icon is displayed.
 * @property {String} [url] - Optional https:// URL that will open in a new tab when the action icon is clicked.
 */
/**
 * @callback TrelloAlertFunction
 * @param {TrelloAlertOptions} opts
 */
/**
 * @typedef {Object} TrelloAlertOptions
 * @property {String} message - The message to display to the user.
 * @property {Number} duration - Default: 5, Minimum: 5, Maximum: 30.	How long you want the alert displayed for, in seconds. Try to be brief.
 */
/**
 * @callback TrelloSignUrlFunction
 * @param {String} url
 * @param {JSON} args
 */
/**
 * @callback TrelloRenderFunction
 * @param {Function} callback
 */
/**
 * @callback TrelloNotifyParentFunction
 * @param {String} message
 */
/**
 * @callback TrelloJwtFunction
 * @param {TrelloJwtOptions} opts
 * @returns {TrelloJwtVerifyResult | String}
 */
/**
 * @typedef {Object} TrelloJwtVerifyResult
 * @property {TrelloJwtVerifyFunction} verify
 */
/**
 * @callback TrelloJwtVerifyFunction
 * @param {String} token
 * @param {String} key
 * @returns {String}
 */
/**
 * @typedef {Object} TrelloJwtOptions
 * @property {String} state - JSON.stringify an object to send as a message {message : "my message"}
 */
/**
 * @callback TrelloGetContextFunction
 * @returns {TrelloObject}
 */
/**
 * @callback TrelloAuthWindowFunction
 * @param {String} url - the url
 * @param {TrelloAuthWindowOptions} opts
 * @returns {String} The users token
 */
/**
 * @typedef {Object} TrelloAuthWindowOptions
 * @property {Number} height - Height of the window to be opened in pixels.
 * @property {Number} width - Width of the window to be opened in pixels.
 * @property {String} validToken - A function that returns a boolean value to indicate whether the token being returned is valid or not.
 * @property {String} windowCallback - This callback gets called with the handle to the authorization window.
 */
/**
 * @callback TrelloAttachFunction
 * @param {TrelloAttachmentDataType} data
 */
/**
 * @typedef {Object} TrelloAttachmentDataType
 * @property {String} id
 * @property {String} name
 * @property {String} url
 * @property {String} bytes
 */
/**
 * @callback TrelloArgFunction
 * @param {String} name
 * @param {String} defaultValue
 * @returns {String | JSON}
 */
/**
 * @callback TrelloLocalizeNodeFunction
 * @param {HTMLElement} DOMelement
 */
/**
 * @callback TrelloLocalizeKeysFunction
 * @param {String[] | {key : value}[]} keys
 * @returns {String[]}
 */
/**
 * @callback TrelloLocalizeKeyFunction
 * @param {String} key
 * @param {String} data
 * @returns {String}
 */
/**
 * @callback TrelloIsMemberSignedInFunction
 * @returns {Boolean}
 */
/**
 * @callback TrelloMemberCanWriteToModelFunction
 * @returns {Boolean}
 */
/**
 * @callback TrelloOrganizationFunction
 * @param {... ("all" | "id" | "name")} fields
 * @returns {TrelloOrganizationObject}
 */
/**
 * @callback TrelloMemberFunction
 * @param {... ("all" | "id" | "fullName" | "username" | "avatar" | "initials")} fields
 * @returns {TrelloMemberObject}
 */
/**
 * @callback TrelloCardsFunction
 * @param { ... (TrelloCardFields)} fields
 * @returns {TrelloCard[]}
 */
/**
 * @callback TrelloCardFunction
 * @param { ... (TrelloCardFields)} fields
 * @returns {TrelloCard}
 */
/**
 * @typedef {"all" | "id" | "name" | "desc" | "due" | "dueComplete" | "closed" | "cover" | "attachments" | "members" | "labels" | "url" | "shortLink" | "idList" | "idShort" | "dateLastActivity" | "badges" | "customFieldItems" | "coordinates" | "address" | "locationName" | "pos" | "checklists"} TrelloCardFields
 */
/**
 * @callback TrelloListsFunction
 * @param {... ("all" | "id" | "name" | "cards")} fields
 * @returns {TrelloList[]}
 */
/**
 * @callback TrelloListFunction
 * @param {... ("all" | "id" | "name" | "cards")} fields
 * @returns {TrelloList}
 */
/**
 * @callback TrelloBoardFunction
 * @param {... ("all" | "id" | "name" | "url" | "shortLink" | "members" | "dateLastActivity" | "idOrganization" | "customFields" | "labels" | "memberships")} fields
 * @returns {TrelloBoard}
 */
/**
 * @callback TrelloApiClientObject
 * @returns {TrelloApiClientOptionsObject}
 */
/**
 * @typedef {Object} TrelloApiClientOptionsObject
 * @property {TrelloIsAuthorizedFunction} isAuthorized - indicates whether the member has authorized your Power-Up to make API requests on their behalf.
 * @property {TrelloAuthorizeFunction} authorize - Use client.authorize to kick off the auth flow and get a token you can use to make requests to the Trello REST API on behalf of the member.
 * @property {TrelloGetTokenFunction} getToken - provides the token obtained from a previous call to client.authorize
 * @property {Function} clearToken - removes the stored token
 */
/**
 * @callback TrelloGetTokenFunction
 * @returns {String} The users token
 */
/**
 * @callback TrelloIsAuthorizedFunction
 * @returns {Boolean} true if the user is authorized
 */
/**
 * @callback TrelloAuthorizeFunction
 * @param {TrelloAuthorizationOptions} opts - accepts an optional opts object which can have the following optional parameters: expiration, scope, return_url
 * @returns {String} The users token
 */
/**
 * @typedef {Object} TrelloAuthorizationOptions
 * @property {"never"|"1hour"|"1day"|"30days"|String} expiration - One of: 1hour, 1day, 30days, never
 * @property {"read"|"write"|"account"} scope - Comma separated list of: read, write, account
 * @property {String} return_url - The URL to redirect to at the end of the auth flow. You generally don't want to change this. We also recommend that you specify the origins that your application will redirect to when completing authorization.
 */
/**
 * @callback TrelloObjectGet
 * @param {"board"|"card"|"member"|"organization"} scope - Valid scopes include: board, card, member, organization, or the ID of a card on the current board.
 * @param {"shared"|"private"} visibility - There are two options for visibility: shared and private. Shared means that any Trello member who can see the object and private means that only the member will be able to see it.
 * @param {String} [key] - Optional: the key for the setting
 * @param {String} [default] - Default value to return if key not found - if an {Object} use JSON.stringify()
 * @returns {String} JSON Data
 */
/**
 * @callback TrelloObjectSet
 * @param {"board"|"card"|"member"|"organization"} scope - Valid scopes include: board, card, member, organization, or the ID of a card on the current board.
 * @param {"shared"|"private"} visibility - There are two options for visibility: shared and private. Shared means that any Trello member who can see the object and private means that only the member will be able to see it.
 * @param {String | JSON} key - The key name for the setting, or a JSON Object {key:value} pairs
 * @param {String} [value] - The value for the setting
 * @returns {String} JSON Data
 */
/**
 * @callback TrelloObjectGetAll
 * @returns {String} JSON Data
 */
/**
 * @callback TrelloObjectRemove
 * @param {"board"|"card"|"member"|"organization"} scope - Valid scopes include: board, card, member, organization, or the ID of a card on the current board.
 * @param {"shared"|"private"} visibility - There are two options for visibility: shared and private. Shared means that any Trello member who can see the object and private means that only the member will be able to see it.
 * @param {String | String[]} key - The key name (or an array of names) for the values to remove
 */
/**
 * @typedef {Object} TrelloBoard
 * @property {String} id
 * @property {String} name
 * @property {String} url
 * @property {String} shortLink
 * @property {TrelloMemberObject[]} members
 * @property {Date} dateLastActivity
 * @property {String} idOrganization
 * @property {TrelloLabel[]} labels
 * @property {*} customFields
 * @property {TrelloMembership[]} memberships
 */
/**
 * @typedef {Object} TrelloMembership
 * @property {String} id
 * @property {Boolean} deactivated
 * @property {String} idMember
 * @property {TrelloMemberType} memberType
 * @property {Boolean} unconfirmed
 */
/**
 * @typedef {"admin" | "normal" | "observer" | "unknown"} TrelloMemberType
 */
/**
 * @typedef {Object} TrelloList
 * @property {String} id
 * @property {String} name
 * @property {TrelloCard[]} cards
 */
/**
 * @typedef {Object} TrelloCard
 * @property {String} id
 * @property {String} name
 * @property {String} desc
 * @property {Date} due
 * @property {Boolean} dueComplete
 * @property {Date} start
 * @property {Boolean} closed
 * @property {TrelloCardCover} cover
 * @property {TrelloAttachmentDataType[]} attachments
 * @property {TrelloMemberObject[]} members
 * @property {TrelloLabel[]} labels
 * @property {String} url
 * @property {String} shortLink
 * @property {String} shortUrl
 * @property {String} idList
 * @property {String} idShort
 * @property {Date} dateLastActivity
 * @property {*} badges
 * @property {*} customFieldItems
 * @property {{Number,Number}} coordinates
 * @property {String} address
 * @property {String} locationName
 * @property {"top" | "bottom" | Number} pos
 * @property {TrelloChecklist[]} checklists
 */
/**
 * @typedef {Object} TrelloLabel
 * @property {String} id
 * @property {String} idBoard
 * @property {String} name
 * @property {TrelloColor} color
 */
/**
 * @typedef {Object} TrelloCardCover
 * @property {TrelloColor} color
 * @property {String} idAttachment
 * @property {String} idUploadedBackground
 * @property {'normal' | 'large' } size
 * @property {'light' | 'dark'} brightness
 * @property {String} idPlugin
 */
/**
 * @typedef { 'blue' | 'green' | 'orange' | 'red' | 'yellow' | 'purple' | 'pink' | 'sky' | 'lime' | 'light-gray' } TrelloColor
 */
/**
 * @typedef {Object} TrelloMemberObject
 * @property {String} id
 * @property {String} fullName
 * @property {String} username
 * @property {*} avatar
 * @property {String} initials
 */
/**
 * @typedef {Object} TrelloOrganizationObject
 * @property {String} id
 * @property {String} name
 */
/**
 * @typedef {Object} TrelloCheckList
 * @property {String} id
 * @property {String} idBoard
 * @property {String} idCard
 * @property {String} name
 * @property {Number} pos
 * @property {TrelloCheckItem[]} checkItems
 */
/**
 * @typedef {Object} TrelloCheckItem
 * @property {String} id
 * @property {String} name
 * @property {Number} pos
 * @property {Boolean} checked
 * @property {Date} due
 * @property {Date} dueReminder
 * @property {String} idMember
 */
