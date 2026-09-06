// ========================================
// CubeRewards - Main Application Logic
// ========================================

// State Management
const state = {
    cubePoints: 0,
    totalPointsEarned: 0,
    username: localStorage.getItem('cubeRewardsUsername') || 'Player_123',
    vipStatus: localStorage.getItem('cubeRewardsVIP') === 'true',
    earningRate: 50, // points per 10 seconds
    sessionStartTime: Date.now(),
    currentPage: 'home'
};

// Initialize earning rate based on VIP status
if (state.vipStatus) {
    state.earningRate = 100;
}

// Load saved data
function loadSavedData() {
    const saved = localStorage.getItem('cubeRewardsData');
    if (saved) {
        const data = JSON.parse(saved);
        state.cubePoints = data.cubePoints || 0;
        state.totalPointsEarned = data.totalPointsEarned || 0;
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('cubeRewardsData', JSON.stringify({
        cubePoints: state.cubePoints,
        totalPointsEarned: state.totalPointsEarned
    }));
}

// ========================================
// Page Navigation
// ========================================

function navigatePage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Remove active class from nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Add active class to corresponding nav link
    document.querySelector(`[data-page="${pageId}"]`).classList.add('active');

    state.currentPage = pageId;
}

// ========================================
// Points System
// ========================================

function addPoints(amount) {
    state.cubePoints += amount;
    state.totalPointsEarned += amount;
    updateDisplay();
    saveData();
}

function updateDisplay() {
    // Update points display on all pages
    document.getElementById('pointsDisplay').textContent = formatNumber(state.cubePoints);
    document.getElementById('profilePointsDisplay').textContent = formatNumber(state.cubePoints);
    document.getElementById('totalPointsDisplay').textContent = formatNumber(state.totalPointsEarned);
    document.getElementById('usernameDisplay').textContent = state.username;
    document.getElementById('profilePointsDisplay').textContent = formatNumber(state.cubePoints);
    
    // Update VIP status
    const vipStatusEl = document.getElementById('vipStatusDisplay');
    if (state.vipStatus) {
        vipStatusEl.innerHTML = '<span class="status-active">👑 VIP Member</span>';
    } else {
        vipStatusEl.innerHTML = '<span class="status-inactive">Standard</span>';
    }

    // Update earning rate
    document.getElementById('earnRateDisplay').textContent = state.earningRate;

    // Update session time
    updateSessionTime();
}

function formatNumber(num) {
    return num.toLocaleString();
}

// ========================================
// Passive Earning System
// ========================================

setInterval(() => {
    addPoints(state.earningRate);
}, 10000); // 10 seconds

// ========================================
// Session Time Tracking
// ========================================

function updateSessionTime() {
    const elapsedMs = Date.now() - state.sessionStartTime;
    const elapsedMinutes = Math.floor(elapsedMs / 60000);
    document.getElementById('sessionTimeDisplay').textContent = `${elapsedMinutes}m`;
}

setInterval(updateSessionTime, 60000); // Update every minute

// ========================================
// VIP Pass Purchase
// ========================================

document.getElementById('buyVipBtn').addEventListener('click', () => {
    showPurchaseModal('VIP Pass', 'Instant 750 Cube Points + Double earning rate', '$4.99', () => {
        // Apply VIP benefits
        state.vipStatus = true;
        state.earningRate = 100;
        addPoints(750);
        
        // Save VIP status
        localStorage.setItem('cubeRewardsVIP', 'true');
        
        // Update display
        updateDisplay();
        
        // Disable the VIP button
        document.getElementById('buyVipBtn').disabled = true;
        document.getElementById('buyVipBtn').textContent = 'Already VIP';
        
        // Show confirmation
        showNotification('Welcome to VIP! You now earn 100 points every 10 seconds!');
    });
});

// Disable VIP button if already VIP
if (state.vipStatus) {
    document.getElementById('buyVipBtn').disabled = true;
    document.getElementById('buyVipBtn').textContent = 'Already VIP';
}

// ========================================
// Reward Purchase
// ========================================

document.querySelectorAll('.reward-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const robux = e.target.dataset.robux;
        const price = e.target.dataset.price;
        
        showPurchaseModal(
            `${robux} Robux`,
            `You will receive ${robux} Robux to your Roblox account`,
            `$${price}`,
            () => {
                // Simulate purchase
                showNotification(`Successfully purchased ${robux} Robux! Check your Roblox account.`);
            }
        );
    });
});

// ========================================
// Modal Management
// ========================================

function showPurchaseModal(title, description, price, onConfirm) {
    const modal = document.getElementById('purchaseModal');
    const details = document.getElementById('purchaseDetails');
    
    details.innerHTML = `
        <div>${description}</div>
        <div class="amount">${title}</div>
        <div class="price">$${price}</div>
    `;
    
    modal.classList.add('active');
    
    document.getElementById('confirmPurchaseBtn').onclick = () => {
        onConfirm();
        modal.classList.remove('active');
    };
}

function showNotification(message) {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Modal Functionality
// ========================================

// Close modals
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
        e.target.closest('.modal').classList.remove('active');
    });
});

document.getElementById('cancelPurchaseBtn').addEventListener('click', () => {
    document.getElementById('purchaseModal').classList.remove('active');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// ========================================
// Username Management
// ========================================

document.getElementById('editUsernameBtn').addEventListener('click', () => {
    document.getElementById('usernameInput').value = state.username;
    document.getElementById('usernameModal').classList.add('active');
});

document.getElementById('saveUsernameBtn').addEventListener('click', () => {
    const newUsername = document.getElementById('usernameInput').value.trim();
    if (newUsername && newUsername.length > 0 && newUsername.length <= 20) {
        state.username = newUsername;
        localStorage.setItem('cubeRewardsUsername', newUsername);
        updateDisplay();
        document.getElementById('usernameModal').classList.remove('active');
        showNotification(`Username changed to ${newUsername}!`);
    } else {
        alert('Please enter a valid username (1-20 characters)');
    }
});

// ========================================
// Progress Reset
// ========================================

document.getElementById('resetProgressBtn').addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone!')) {
        state.cubePoints = 0;
        state.totalPointsEarned = 0;
        state.vipStatus = false;
        state.earningRate = 50;
        state.sessionStartTime = Date.now();
        
        localStorage.removeItem('cubeRewardsData');
        localStorage.removeItem('cubeRewardsVIP');
        
        updateDisplay();
        document.getElementById('buyVipBtn').disabled = false;
        document.getElementById('buyVipBtn').textContent = 'Get VIP Pass - $4.99';
        
        showNotification('Progress has been reset!');
    }
});

// ========================================
// Navigation Setup
// ========================================

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = e.target.dataset.page;
        navigatePage(pageId);
    });
});

// ========================================
// Initialization
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    updateDisplay();
    navigatePage('home');
});
