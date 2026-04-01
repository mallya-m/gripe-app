# Core Logic Design

## 1. Gripe (Raw Input)
A gripe is a single complaint logged by the user.

Fields:
- text
- severity (1–5, optional)
- createdAt

---

## 2. Case (Grouped Pattern)
A case is a group of similar gripes.

Example:
"Manager ignores messages"
"Boss not replying"
→ same case

---

## 3. Clustering Logic (Basic v1)

When a new gripe is added:
- convert text to lowercase
- remove common words (like "the", "is")
- check similarity with existing cases

If similarity > threshold:
→ add to existing case

Else:
→ create new case

---

## 4. Severity Score

Each case has a score based on:

- frequency (how many times it occurred)
- intensity (average severity input)

Formula (v1):
score = frequency * average_severity

---

## 5. Output

User sees:
- top repeated patterns
- most severe cases
- timeline of events

---

## Future Ideas
- NLP-based clustering
- tagging system
- auto-detection of toxic patterns