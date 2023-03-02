module.exports = async e => {
    Window.current_daily_file_date = app.workspace.getActiveFile().basename.replace(/-\w+$/, '');
}
