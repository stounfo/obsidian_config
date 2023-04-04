<%*
async function add_daily_emotions() {
    emotions = ["Mood", "Productivity", "Rest"];
    result = [];
    for (const i in emotions) {
        score = await app.plugins.plugins.quickadd.api.inputPrompt(emotions[i] + " (0-3)");
        result.push(`>- ${emotions[i]}: ${score}`);
    }
    return result.join("\n")
}
%><% add_daily_emotions() %>