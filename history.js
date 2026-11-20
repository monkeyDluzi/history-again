function showPanel(panelId) {

    // Hide every panel
    document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.remove('active');
    });

    // Show the selected panel
    document.getElementById(panelId).classList.add('active');
}
