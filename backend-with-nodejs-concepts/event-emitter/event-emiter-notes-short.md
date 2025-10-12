#  Node.js EventEmitter – Notes

### 1. **Concept**

* Node.js is **event-driven**, meaning many operations emit events which we can **listen to and respond**.
* `EventEmitter` class (`events` module) is used to **create, listen, and trigger custom events**.

---

### 2. **Import EventEmitter**

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
```

---

### 3. **Creating and Emitting Events**

* `emit(eventName, args...)` → triggers the event
* Event name is a string (custom or predefined)

```js
myEmitter.emit('eventName', arg1, arg2);
```

---

### 4. **Adding Listeners**

* **Single listener**

```js
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});
myEmitter.emit('greet', 'Tanish');
```

Output:

```
Hello, Tanish!
```

* **Multiple listeners**

```js
myEmitter.on('greet', (name) => console.log(`Listener 1: ${name}`));
myEmitter.on('greet', (name) => console.log(`Listener 2: ${name}`));

myEmitter.emit('greet', 'Tanish');
```

Output:

```
Listener 1: Tanish
Listener 2: Tanish
```

---

### 5. **One-time Listener**

* `once(eventName, listener)` → listener runs only **once**

```js
myEmitter.once('greet', (name) => console.log(`Hello ${name}, one-time!`));
myEmitter.emit('greet', 'Tanish'); // runs
myEmitter.emit('greet', 'Tanish'); // ignored
```

---

### 6. **Removing Listeners**

* `removeListener` / `off` → removes a specific listener

```js
const greetListener = (name) => console.log(`Hello ${name}`);
myEmitter.on('greet', greetListener);
myEmitter.off('greet', greetListener);
```

* `removeAllListeners(eventName)` → remove all listeners for that event

---

### 7. **EventEmitter Methods Summary**

| Method                            | Purpose                               |
| --------------------------------- | ------------------------------------- |
| `on(event, listener)`             | Add a listener (multiple allowed)     |
| `once(event, listener)`           | Add a listener that runs only once    |
| `emit(event, args...)`            | Trigger the event                     |
| `off(event, listener)`            | Remove specific listener              |
| `removeListener(event, listener)` | Remove specific listener              |
| `removeAllListeners(event)`       | Remove all listeners for an event     |
| `listenerCount(event)`            | Returns number of listeners for event |
| `listeners(event)`                | Returns array of listeners            |

---

### 8. **Practical Use Cases**

* Logging events (`logger.on('log', callback)`)
* Notification system (`orderPlaced`, `paymentDone`)
* Async workflows coordination
* Custom event-driven architecture for apps

---

### 9. **Example – Real-life Demo**

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// Multiple listeners
myEmitter.on('orderPlaced', (orderId) => console.log(`Send email for order ${orderId}`));
myEmitter.on('orderPlaced', (orderId) => console.log(`Send SMS for order ${orderId}`));

// Trigger event
myEmitter.emit('orderPlaced', 101);
```

Output:

```
Send email for order 101
Send SMS for order 101
```

---

### 10. **Key Takeaways**

* EventEmitter = backbone of Node.js **async & event-driven** programming
* Supports **single / multiple / one-time** listeners
* Can **emit custom events with arguments**
* Middleware-like event-driven patterns can make code **modular and clean**
