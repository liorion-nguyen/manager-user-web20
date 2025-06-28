export const showAlert = (message) => {
    // Remove any existing alerts first
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    const body = document.querySelector('body');
    const alertId = 'alert-' + Date.now(); // Create unique ID
    const elAlert = `
        <div class="alert" id="${alertId}">
            <span class="alert-message">${message}</span>
        </div>
    `;
    
    // Use insertAdjacentHTML instead of innerHTML += to avoid breaking existing elements
    body.insertAdjacentHTML('beforeend', elAlert);
    
    // Remove alert after 3 seconds
    setTimeout(() => {
        const alert = document.getElementById(alertId);
        if (alert) {
            alert.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => {
                alert.remove();
            }, 300);
        }
    }, 3000);
}