# Kaleidosim States

This project contains the different states that a case in KaleidoSim system can be.

There are three main files:

* apiStates.js
* stateDescription.js
* states.js

## apiStates file

It contains the different states that a case can be, most of the time the user will be interested only in end, updating and error states.

The states described in the `API_STATES_MAP` variable are considered to be the most important for an API integration, but you can still use any of the states listed in the `states.js` file.
## stateDescription file

Every state in KaleidoSim has a different properties, for example we can check if the case can be deleted in an specific state or not.

All the states containes in the `smStateStrings` variable are considered in KaleidoSim.

There are some useful functions implemented like `getStateDescription`, this function will receive any state listed in `state.js` file and it will return an object like this:

```javascript
{
    state: ENDSTATE,
    text: "Ended",
    color: "light",
    className: "fa fa-times",
    blockRun: false,
    blockEdit: false,
    blockAbort: false,
    blockTerminate: false,
    blockDelete: false,
  }
```

## states file

This file contains all the possible states that a case can be in KaleidoSim system.