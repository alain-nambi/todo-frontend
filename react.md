Bien sûr, voici une liste des hooks de React avec des exemples et des explications :

1. useState
2. useEffect
3. useContext
4. useReducer
5. useCallback
6. useMemo
7. useRef
8. useLayoutEffect
9. useImperativeHandle
10. useDebugValue


`useState` : permet de déclarer un état local dans un composant fonctionnel. Cet état peut être modifié grâce à la fonction setState.

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

`useEffect` : permet d'effectuer des effets de bord (comme des appels à des API ou des mises à jour du DOM) après chaque rendu du composant. 

```javascript
import React, { useState, useEffect } from 'react';

function GithubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [username]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{user.name}</p>
      <img src={user.avatar_url} alt={user.name} />
    </div>
  );
}
```

`useContext` : permet de consommer un contexte créé avec la fonction createContext. 

```javascript
import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <button style={{ backgroundColor: theme }}>Click me</button>
    </div>
  );
}
```

`useReducer` : permet de gérer un état complexe avec des actions.

```javascript
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
    </div>
  );
}
```

`useCallback` : permet de mémoriser une fonction pour éviter qu'elle ne soit recréée à chaque rendu du composant.

```javascript
import React, { useState, useCallback } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
}
```

`useMemo` : permet de mémoriser une valeur calculée pour éviter qu'elle ne soit recalculée à chaque rendu du composant.

```javascript
import React, { useState, useMemo } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double count: {doubleCount}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

`useRef` : permet de créer une référence mutable pour un élément du DOM ou une valeur.

```javascript
import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
}
```

`useLayoutEffect` : est similaire à useEffect, mais il s'exécute immédiatement après les mutations du DOM. Il est utile pour les mises à jour du DOM synchrones et les animations. 

```javascript
import React, { useState, useLayoutEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

`useImperativeHandle` : permet à un composant enfant de fournir une interface impérative à son parent.

```javascript
import React, { useRef, useImperativeHandle } from 'react';

function TextInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input type="text" ref={inputRef} />;
}

TextInput = React.forwardRef(TextInput);

function App() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <TextInput ref={inputRef} />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
}
```

`useDebugValue` : permet de fournir des informations de débogage pour un hook personnalisé.

```javascript
import React, { useState, useDebugValue } from 'react';

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  useDebugValue(`Count: ${count}`);

  function increment() {
    setCount(count + 1);
  }

  return [count, increment];
}

function Counter() {
  const [count, increment] = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
}
```