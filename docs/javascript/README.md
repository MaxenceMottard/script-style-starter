---
title: Javascript
---

# Scripts

Documentation of the different classes offered by the package.

## MenuBehaviour class

This class is used to implement the behavior of a burger menu. It allows to open a menu at the click of a button.

```js
import { MenuBehaviour } from '@maxencemottard/web-assets'

const menu = new MenuBehaviour({
  elementSelector: '.MenuSelector',
  btnSelector: '.ButtonSelector',
});
```

### Table of properties

| Property Name           | Required | Default   | Type       | Description                                                  |
| ----------------------- | -------- | --------- | ---------- | ------------------------------------------------------------ |
| elementSelector         | **true** | undefined | `string`   | This property is a string, it is used to define the menu selector. It is necessary for the proper operation of this class. |
| btnSelector             | **true** | undefined | `string`   | This property is a string, itused to set the selector of the button to open the menu. It is necessary for the proper functioning of this class. |
| openCallback            | false    | null      | `function` | This property is a function, it allows you to define a callback function that will be called when opening the menu. |
| closeCallback           | false    | null      | `function` | This property is a function, it allows you to define a callback function that will be called at the closing of the menu. |
| accessibility           | false    | true      | `boolean`  | This property enables or disables the accessibility attributes.<br/><br/>Example: If this property is activated, when the menu is closed, the script will add **tabIndex="-1"** attributes to make the clickable elements unselectable with the tab. |
| accessibilityBreakpoint | false    | 10000     | `number`   | This property allows you to set the maximum screen size for which accessibility attributes are enabled.<br/><br/>Use case: You implement a burger menu that will no longer have open/close behavior for screens larger than 920px. The value of **accessibilityBreakpoint** will then be **920**. |
| openClass               | false    | active    | `string`   | This property allows you to define the class that will be injected in the HTML when the menu is opened. |

## ModalBehaviour class

This class is very similar to the MenuBehaviour class. It allows to open a menu at the click of a button. The only notable difference is that it works with a second button to close the menu.<br/> This class can be convenient to use for Modal but can also be used for menus in some cases.

```js
import { ModalBehavoiur } from '@maxencemottard/web-assets'

const menu = new MenuBehaviour({
  elementSelector: '.MenuSelector',
  openBtnSelector: '.OpenButtonSelector',
  closeBtnSelector: '.CloseButtonSelector',
});
```

### Table of properties

| Property Name            | Required | Default   | Type       | Description                                                  |
| ------------------------ | -------- | --------- | ---------- | ------------------------------------------------------------ |
| elementSelector          | **true** | undefined | `string`   | This property is a string, it is used to define the menu selector. It is necessary for the proper operation of this class. |
| openBtnSelector          | **true** | undefined | `string`   | This property is a string, itused to set the selector of the button to open the menu. It is necessary for the proper functioning of this class. |
| closeBtnSelector         | **true** | undefined | `string`   | This property is a string, itused to set the selector of the button to open the menu. It is necessary for the proper functioning of this class. |
| openCallback             | false    | null      | `function` | This property is a function, it allows you to define a callback function that will be called when opening the menu. |
| closeCallback            | false    | null      | `function` | This property is a function, it allows you to define a callback function that will be called at the closing of the menu. |
| accessibility            | false    | true      | `boolean`  | This property enables or disables the accessibility attributes.<br/><br/>Example: If this property is activated, when the menu is closed, the script will add **tabIndex="-1"** attributes to make the clickable elements unselectable with the tab. |
| accessibilityBreakpoint  | false    | 10000     | `number`   | This property allows you to set the maximum screen size for which accessibility attributes are enabled.<br/><br/>Use case: You implement a burger menu that will no longer have open/close behavior for screens larger than 920px. The value of **accessibilityBreakpoint** will then be **920**. |
| openClass                | false    | active    | `string`   | This property allows you to define the class that will be injected in the HTML when the menu is opened. |

