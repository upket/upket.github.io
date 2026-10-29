---
# NỘI DUNG MẪU — thay bằng bài viết thật
title: How Tally stays fast offline
tags: [tally, engineering]
excerpt: A local-first data model, a tiny sync queue, and why I skipped a backend for the first year.
---
Tally writes every purchase to a local database first. The UI never waits for the network.

## The sync queue

Each change becomes a small record in a queue. When the phone is online, the queue drains in order:

```kotlin
data class Change(val id: String, val op: Op, val at: Long)

suspend fun drain(queue: Queue) {
    while (true) {
        val next = queue.peek() ?: break
        api.push(next)
        queue.remove(next.id)
    }
}
```

Sample post — replace with your own.
