---
created: "<% tp.file.creation_date() %>"
cssclass: daily
tags:
    - daily
---

# [<< Yesterday](/database/daily/<% moment(tp.file.title, "YYYY-MM-DD-dddd").subtract(1, "d").format("YYYY/MM-MMM/YYYY-MM-DD-dddd") %>) [Tomorrow >>](/database/daily/<% moment(tp.file.title, "YYYY-MM-DD-dddd").add(1, "d").format("YYYY/MM-MMM/YYYY-MM-DD-dddd") %>)
# <% moment(tp.file.title,"YYYY-MM-DD").format("dddd, MMMM DD, YYYY") %>
---
## Tasks
##### Personal
```button
name New Personal Task
type prepend template
action add_personal_daily_task
```
##### Work
```button
name New Work Task
type prepend template
action add_work_daily_task
```
---
##### Notes created
```dataview

List FROM "" WHERE file.cday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.ctime asc

```
