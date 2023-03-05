---
created: "<% tp.file.creation_date() %>"
cssclass: daily
tags:
    - daily
---

# [<< Yesterday](/database/daily/<% moment(tp.file.title, "YYYY-MM-DD-dddd").subtract(1, "d").format("YYYY/MM-MMM/YYYY-MM-DD-dddd") %>) [Tomorrow >>](/database/daily/<% moment(tp.file.title, "YYYY-MM-DD-dddd").add(1, "d").format("YYYY/MM-MMM/YYYY-MM-DD-dddd") %>)
# <% moment(tp.file.title,"YYYY-MM-DD").format("dddd, MMMM DD, YYYY") %>
[Tasks](#Tasks) • [Events](#Events) • [Activities](#Activities) • [Data](#Data)
---
## Tasks
##### Personal
```tasks
path includes <% tp.file.path(true) %>
tags include #personal_task
tags include #daily_task
due on <% moment(tp.file.title,"YYYY-MM-DD").format("YYYY-MM-DD") %>

hide backlink
hide due date
hide done date
```
```button
name New Personal Task
type command
action QuickAdd: add_personal_daily_task
```
##### Work
```tasks
path includes <% tp.file.path(true) %>
tags include #work_task
tags include #daily_task
due on <% moment(tp.file.title,"YYYY-MM-DD").format("YYYY-MM-DD") %>

hide backlink
hide due date
hide done date
```
```button
name New Personal Task
type command
action QuickAdd: add_work_daily_task
```
##### Unfinished tasks 
```tasks
not done
due before <% moment(tp.file.title,"YYYY-MM-DD").format("YYYY-MM-DD") %>
tags does not include #habits_task
```
##### Habits
```tasks
path includes <% tp.file.path(true) %>
tags include #habits_task
tags include #daily_task
due on <% moment(tp.file.title,"YYYY-MM-DD").format("YYYY-MM-DD") %>

hide backlink
hide due date
hide done date
```
---
## Events
```button
name New Event
type command
action Full Calendar: New Event
```
---
## Activities
##### Notes created
```dataview
List FROM "" WHERE file.cday = date("<% moment(tp.file.title,"YYYY-MM-DD").format("YYYY-MM-DD") %>") SORT file.ctime asc
```
##### Notes updated
```dataview
List FROM "" WHERE file.mday = date("<% moment(tp.file.title,"YYYY-MM-DD").format("YYYY-MM-DD") %>") SORT file.ctime asc
```
---
## Data
##### Tasks
- [ ] Read a book #task #habits_task #daily_task 📅 <% moment(tp.file.title,"YYYY-MM-DD").format("YYYY-MM-DD") %>
- [ ] Learn English words #task #habits_task #daily_task 📅 <% moment(tp.file.title,"YYYY-MM-DD").format("YYYY-MM-DD") %>
