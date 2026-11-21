function showPanel(panelId) {
    // 1. Hide every panel
    document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.remove('active');
    });

    // 2. Show the selected panel
    const targetPanel = document.getElementById(panelId);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }

    // 3. Highlight the active nav button (optional)
    document.querySelectorAll('.nav-links button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') === `showPanel('${panelId}')`) {
            btn.classList.add('active');
        }
    });

    // 4. Scroll smoothly back to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

