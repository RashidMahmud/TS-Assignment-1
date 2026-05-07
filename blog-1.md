## Topic1: Why `any` is a Type Safety Hole and Why `unknown` is Safer

TypeScript-এর প্রধান কাজ হলো কোড রান করার আগেই ভুল ধরিয়ে দেওয়া। কিন্তু `any` ব্যবহার করা মানে হলো TypeScript-কে বলা যে "তুমি এই ভেরিয়েবলটি চেক করো না"। এটি টাইপ সিস্টেমের ভেতর একটি গর্ত বা "hole" তৈরি করে।


### ❌ Why `any` is a "Type Safety Hole"?

`any` ব্যবহার করলে TypeScript কোনো বাধা দেয় না। আপনি ভুল টাইপের মেথড কল করলেও এটি কম্পাইল টাইমে কোনো এরর দেখায় না, কিন্তু রান টাইমে অ্যাপ ক্র্যাশ করে।

```ts
let value: any = "Rashid";
value.push(10); // ❌ Runtime Error: string-এর তো push মেথড নেই!
```

এখানে TypeScript নীরব থাকে কারণ `any` টাইপ সেফটি পুরোপুরি বাইপাস (bypass) করে।


### ✅ Why `unknown` is the Safer Choice?

`unknown` টাইপ অনেকটা `any`-এর মতোই যেকোনো ভ্যালু গ্রহণ করতে পারে, কিন্তু এটি ব্যবহার করার আগে TypeScript আপনাকে **Type Check** করতে বাধ্য করবে। এটি সরাসরি ব্যবহারের অনুমতি দেয় না।

```ts
let value: unknown = "Hello";

// value.toUpperCase(); // ❌ সরাসরি ব্যবহার করলে TypeScript এরর দিবে।

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ এখন এটি নিরাপদ।
}
```


### 🔍 Concept of Type Narrowing

Type narrowing হলো একটি টেকনিক যার মাধ্যমে একটি ব্রড টাইপ (যেমন `unknown`) থেকে কোডের লজিক ব্যবহার করে একটি নির্দিষ্ট বা স্পেসিফিক টাইপে আসা হয়। এটি অনেকটা ফিল্টার করার মতো।

**Narrowing করার প্রধান উপায়সমূহ:**
*   `typeof` (Primitive টাইপের জন্য)
*   `instanceof` (Class বা Object এর জন্য)
*   Property check (`"name" in object`)


### 🧠 Conclusion

*   `any` = টাইপ সিস্টেমকে ফাকি দেওয়া (Unsafe) ❌
*   `unknown` = সতর্কভাবে ডেটা হ্যান্ডেল করা (Safe) ✅
*   Type Narrowing = কোডকে রান-টাইম এরর থেকে বাঁচানো।

👉 যখন আপনি জানেন না ডেটা কী আসবে (যেমন API response), তখন `any`-এর বদলে `unknown` ব্যবহার করাই বুদ্ধিমানের কাজ।