async function add_daily_task(tp, note_type) {
    const description = await app.plugins.plugins.quickadd.api.inputPrompt("Task description");
    if (!description) {
        return "";
    };
    return `- [ ] ${description} #task #${note_type} #daily_task 📅 ${moment(tp.file.title,'YYYY-MM-DD').format("YYYY-MM-DD")}`;
}
module.exports = add_daily_task;

