let ag1e: number = 25;
let name: string = "Tanish";
let isActive: boolean = true;
let uid: symbol = Symbol("id");
let bigNum: bigint = 9007199254740991n;


/**
If you have a **folder** (like a project folder) and you try to declare **two variables with the same name in the same scope**, or even have **two files that declare the same global variables** and are compiled together, TypeScript will complain.

Think of it like this:

* **Scope** = a "room" where variable names live.
* If the **same name exists twice in the same room**, TypeScript says: **"bhai, yeh variable already hai!"**

### Example in a folder:

```
/project
   file1.ts
   file2.ts
```

**file1.ts**

```ts
let age: number = 25;
```

**file2.ts**

```ts
let age: number = 30; // Error if compiled together without modules
```

✅ Fix: make each file a **module**:

```ts
// file1.ts
export let age: number = 25;

// file2.ts
export let age: number = 30;
```

Now, both are **module-scoped**, so no conflict happens.
 */