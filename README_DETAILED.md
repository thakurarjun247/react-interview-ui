Perfect. Here's a concise table outlining the **API contract** for your `Widget` app, matching the requirements you shared:

---

### 📑 Widget API Endpoints

| Functionality                  | Method | Endpoint          | Request Body                   | Response        |
| ------------------------------ | ------ | ----------------- | ------------------------------ | --------------- |
| **List all widgets**           | GET    | `/widgets`        | —                              | `Widget[]`      |
| **Get widget by name**         | GET    | `/widgets/{name}` | —                              | `Widget`        |
| **Create a new widget**        | POST   | `/widgets`        | `{ name, description, price }` | `Widget` or 201 |
| **Update widget (desc/price)** | PUT    | `/widgets/{name}` | `{ description?, price? }`     | `Widget` or 200 |
| **Delete a widget**            | DELETE | `/widgets/{name}` | —                              | 204 No Content  |

---

### 🧾 Widget Data Schema

```ts
interface Widget {
  name: string         // 3–100 chars, unique
  description: string  // 5–1000 chars
  price: number        // 1.00 – 20000.00, 2 decimal precision
}
```

---

Let me know if you want a `400/422` validation error format too. Ready for frontend now!
