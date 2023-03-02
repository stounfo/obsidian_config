---
created: "<% tp.file.creation_date() %>"
tags:
    - daily
---

# [<< Yesterday](/database/daily/<% moment(tp.file.title, 'YYYY-MM-DD-dddd').subtract(1, 'd').format('YYYY/MM-MMM/YYYY-MM-DD-dddd') %>)    <% moment(tp.file.title,'YYYY-MM-DD').format("dddd, MMMM DD, YYYY") %>    [Tomorrow >>](/database/daily/<% moment(tp.file.title, 'YYYY-MM-DD-dddd').add(1, 'd').format('YYYY/MM-MMM/YYYY-MM-DD-dddd') %>)

---
##### Personal TODO
```tasks
tags include #personal_task
due on <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
```
```button
name Add
type command
action QuickAdd: add_personal_task_to_current_daily_file
```
##### Work TODO
```tasks
tags include #work_task
due on  <% moment(tp.file.title, "YYYY-MM-DD").format("YYYY-MM-DD") %>
```
```button
name Add
type command
action QuickAdd: add_work_task_to_current_daily_file
```
---
##### Notes created today
```dataview

List FROM "" WHERE file.cday = date("<%tp.date.now("YYYY-MM-DD")%>") SORT file.ctime asc

```

