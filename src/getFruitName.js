// if-else-optimization

//  bad

```js
function getFruitName (type) {
  if (type === 1) {
    return 'apple'
  } else if (type === 2) {
    return 'banana'
  } else if (type === 3) {
    return 'peach'
  } else if (type === 4) {
    return 'orange'
  }
}
```

// good

```js
function getFruitName (type) {
  const FRUITS = {
    1: 'apple',
    2: 'banana',
    3: 'peach',
    4: 'orange'
  }
  return FRUITS[type]
}
```