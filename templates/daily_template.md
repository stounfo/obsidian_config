---
cssclass: daily
obsidianUIMode: preview
---

related: [[Daily]]

---

## [<< Yesterday](/Daily/<% moment(tp.file.title, "YYYY-MM-DD-dddd").subtract(1, "d").format("YYYY/MM-MMM/YYYY-MM-DD-dddd") %>) [Tomorrow >>](/Daily/<% moment(tp.file.title, "YYYY-MM-DD-dddd").add(1, "d").format("YYYY/MM-MMM/YYYY-MM-DD-dddd") %>)
# <% moment(tp.file.title,"YYYY-MM-DD").format("dddd, MMMM DD, YYYY") %>
###### [Notes](#Notes) • [Tasks](#Tasks) • [Trackers](#Trackers) • [Overview](#Overview) • [Data](#Data)
---
### Notes
![](Daily/Notes/<% moment(tp.file.title, "YYYY-MM-DD-dddd").format("YYYY-MM-DD") %>-notes)

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

- [ ] Work
- [ ] Reading
- [ ] English
- [ ] Pet project
- [ ] Running

---
### Overview

#### Notes created
```dataview
List FROM "" WHERE file.cday = date("<% moment(tp.file.title,"YYYY-MM-DD").format("YYYY-MM-DD") %>") SORT file.ctime asc
```
#### Notes updated
```dataview
List FROM "" WHERE file.mday = date("<% moment(tp.file.title,"YYYY-MM-DD").format("YYYY-MM-DD") %>") SORT file.ctime asc
```
---
### Data

#### Tasks
