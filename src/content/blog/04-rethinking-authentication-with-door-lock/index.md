---
title: "Rethinking Authentication: Why Your Password Should Be Your Key, Not Your Risk"
summary: "A fresh take on authentication design that eliminates password storage and empowers users by turning their password into the actual key to their account."
date: "Jun 08 2025"
draft: true
banner: "/blog/door-lock-illustration.png"
tags:
  - Authentication
  - Security
  - Cryptography
  - Backend
  - Argon2id
  - AES
---

In a world where data breaches are common and users often reuse passwords across services, traditional authentication methods are starting to show their cracks. Most systems rely on storing hashed versions of passwords—an approach that, while common, still carries a fundamental trust issue: someone with access to your backend can impersonate any user. Worse, once a password is compromised elsewhere, attackers can test it against your service.

What if we could eliminate this risk altogether? What if passwords weren’t stored, not even as hashes, and instead became literal keys to unlock user accounts?

Let me introduce you to the **Door Lock Authentication Technique**.

---

## The Problem with Traditional Authentication

In most systems:

1. Users enter their password.
2. The backend compares it to a hashed version stored in the database (e.g., via bcrypt).
3. If it matches, the user is authenticated.

**This approach seems safe, but here’s the issue:**

- Admins can impersonate users.
- Password hashes can still be stolen and brute-forced.
- Password reuse means one breach can affect multiple services.

Storing password hashes is a calculated risk. **What if we didn’t store anything derived from the password at all?**

---

## Introducing: The Door Lock Metaphor

Think of a user account like a secure room:

- **Closed Door**: An encrypted version of a timestamp, locked using the user's password.
- **Open Door**: The original timestamp, stored in plain text for comparison.
- **Back Door**: An admin-only lock, encrypted using a master key (admin's secret).

![Door Lock Illustration](/blog/door-lock-illustration.png)

> Instead of storing a hash, you store the lock. The password becomes the key.

---

## How It Works (AES + Argon2id)

### 1. User Registration

```ts
Input: password;

// 1. Generate timestamp
const timestamp = new Date().toISOString();

// 2. Generate salt and IV (initialization vector)
// [Encryptions includes IV and uses AES in GCM mode for authentication.]
const salt = crypto.randomBytes(16);
const ivUser = crypto.randomBytes(12);
const ivAdmin = crypto.randomBytes(12);

// 3. Derive key from password
const keyUser = argon2id(password + salt);

// 4. Encrypt timestamp
const closedDoor = aesEncrypt(timestamp, keyUser, ivUser);
const backDoor = aesEncrypt(timestamp, masterKey, ivAdmin);

// 5. Store in DB
saveToDB({ closedDoor, openDoor: timestamp, backDoor, salt, ivUser, ivAdmin });
```

### 2. User Login

```ts
Input: password;

// 1. Fetch salt and ivUser
// 2. Derive key from password
const keyUser = argon2id(password + salt);

// 3. Decrypt closedDoor
const decrypted = aesDecrypt(closedDoor, keyUser, ivUser);

// 4. Compare with openDoor
decrypted === openDoor ? login() : deny();
```

### 3. Admin Login as User

```ts
Input: admin master key

// 1. Decrypt backDoor
const decrypted = aesDecrypt(backDoor, masterKey, ivAdmin);

// 2. Compare with openDoor
decrypted === openDoor ? loginAsUser() : deny();
```

---

## Why This Is More Secure

| Feature          | Benefit                                   |
| ---------------- | ----------------------------------------- |
| No password hash | Nothing for attackers to steal and crack  |
| Password = Key   | Direct, reversible use via AES            |
| Argon2id         | Highly resistant to brute-force attacks   |
| AES-GCM mode     | Prevents tampering with encrypted payload |
| Admin separation | Secure traceable impersonation, if needed |

---

## What About Password Resets?

Use a secure email-based recovery link to verify identity, then:

- Accept new password
- Re-encrypt the openDoor timestamp with new password (closedDoor)
- Re-encrypt it with master key (backDoor)

---

## Final Thoughts

The Door Lock Authentication Technique is more than a novel method. It's a shift in trust. Instead of storing derivatives of a password, we use the password as a cryptographic key. That means **no trace of the password exists anywhere in your database**.

It's time we stopped treating passwords as secrets to hash and started using them as secure keys to encrypted vaults.

Read More about the technologies used: [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) and [Argon2](https://argon2.online/)

---

**Want to contribute?** Share your thoughts on [X](https://x.com/Oxlxst/status/1931758933728772522)/[LinkedIn](https://www.linkedin.com/posts/rabiuahmad_rethinking-authentication-why-your-password-activity-7337527848741601280-409F?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD_UyZUB82t836LbTegtGecElijw9PEFWp0) or implement this idea in a prototype. Let’s rethink authentication together.

---
