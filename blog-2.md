## Topic3: How Generics Ensure Reusable and Strictly Typed Components

TypeScript-এ Generics মূলত একটি "Type Variable" হিসেবে কাজ করে। এটি আপনাকে এমন code লিখতে দেয় যা বিভিন্ন data type-এর সাথে কাজ করতে পারে, কিন্তু `any` ব্যবহারের মতো টাইপ সেফটি নষ্ট করে না।


### ❌ The Problem: `any` vs Specific Types
যদি আপনি শুধু `number` টাইপ ব্যবহার করেন, তবে function-টি reusable হয় না। আবার `any` ব্যবহার করলে TypeScript টাইপ চেক করা বন্ধ করে দেয়, যা runtime error ঘটাতে পারে।

### ✅ The Solution: `<T>` (The Placeholder)
Generics একটি placeholder (`T`) ব্যবহার করে যা function কল করার সময় real টাইপটি গ্রহণ করে। এতে করে function-টি reusable হয় এবং টাইপও ঠিক থাকে।

```ts
// Generic Function
function getData<T>(arg: T): T {
  return arg;
}

const name = getData<string>("Rashid"); // Type is strictly 'string'
const id = getData<number>(101);         // Type is strictly 'number'
```


### 🛠️ Why use Generics?

*   **Type Safety:** ইনপুট এবং আউটপুট টাইপ সবসময় এক থাকে, যা logic ভুল হওয়া আটকায়।
*   **Reusability:** একই লজিক ভিন্ন ভিন্ন data structure (যেমন User, Product) এর জন্য বারবার ব্যবহার করা যায়।
*   **Scalability:** বড় প্রজেক্টে dynamic টাইপ হ্যান্ডেল করা সহজ হয়।


### 🧠 Conclusion
*   `any` ব্যবহার করলে টাইপ ডিটেইলস হারিয়ে যায়। ❌
*   Generics ব্যবহার করলে TypeScript জানে ঠিক কোন ডেটা রিটার্ন আসছে। ✅

👉 সহজ কথায়, **Generics = Reusability + Strict Type Safety.**</T>