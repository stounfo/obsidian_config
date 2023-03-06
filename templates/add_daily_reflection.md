<%*
async function add_daily_reflection() {
    const reflection = await app.plugins.plugins.quickadd.api.inputPrompt("Reflection");
     
    if (!reflection) {
        return "";
    };
    return reflection;
}
%><% add_daily_reflection() %>