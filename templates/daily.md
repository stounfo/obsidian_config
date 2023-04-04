---
created: "<% tp.file.creation_date() %>"
cssclass: daily
obsidianUIMode: preview
tags:
    - daily
---

# [<< Yesterday](/database/daily/<% moment(tp.file.title, "YYYY-MM-DD-dddd").subtract(1, "d").format("YYYY/MM-MMM/YYYY-MM-DD-dddd") %>) [Tomorrow >>](/database/daily/<% moment(tp.file.title, "YYYY-MM-DD-dddd").add(1, "d").format("YYYY/MM-MMM/YYYY-MM-DD-dddd") %>)
# <% moment(tp.file.title,"YYYY-MM-DD").format("dddd, MMMM DD, YYYY") %>
##### [Tasks](#Tasks) • [Trackers](#Trackers) • [Overview](#Overview) • [Data](#Data)
---
### Tasks

> [!todo] To Do
>```tasks
>not done
>path includes <% tp.file.path(true) %>
>due on <% moment(tp.file.title,"YYYY-MM-DD").format("YYYY-MM-DD") %>
>
>hide backlink
>hide due date
>```
>```button
>name New Task
>type command
>action QuickAdd: add_daily_task
>```

> [!warning] Debt 
>```tasks
>not done
>due before today
>```

> [!done] Done
>```tasks
>done on <% moment(tp.file.title,"YYYY-MM-DD").format("YYYY-MM-DD") %>
>
>hide backlink
>hide due date
>hide done date
>```

---
### Trackers

> [!question] Habits
>- [ ] Reading
>- [ ] English
>- [ ] Pet project
>- [ ] Running

> [!tip] Emotions
>```button
>name Fill Emotions
>type prepend template
>action add_daily_emotions
>```

> [!Note] Reflection
>```button
>name Fill Reflection
>type prepend template
>action add_daily_reflection
>```

---
### Overview
##### Notes created
```dataview
List FROM "" WHERE file.cday = date("<% moment(tp.file.title,"YYYY-MM-DD").format("YYYY-MM-DD") %>") SORT file.ctime asc
```
##### Notes updated
```dataview
List FROM "" WHERE file.mday = date("<% moment(tp.file.title,"YYYY-MM-DD").format("YYYY-MM-DD") %>") SORT file.ctime asc
```
---
### Data
##### Tasks
