<%*
async function add_daily_emotions() {
    const rating_map = {
        1: "🔴",
        2: "🟡",
        3: "🟢",
    };
    const mood = rating_map[await app.plugins.plugins.quickadd.api.inputPrompt("Mood")];
    const productivity = rating_map[await app.plugins.plugins.quickadd.api.inputPrompt("Productivity")];
     
    if (!mood && !productivity) {
        return "";
    };
    return `- mood:: ${mood}\n- productivity:: ${productivity}`;
}
%><% add_daily_emotions() %>