# CubeRewards 🎮

A modern, mobile-friendly rewards website where users can earn Cube Points passively and redeem them for Robux rewards.

## Features ✨

### 🏠 Home Page
- **Real-time Points Display**: Watch your Cube Points balance update in real-time
- **Passive Earning System**: Earn 50 Cube Points every 10 seconds automatically
- **VIP Pass Upgrade**: 
  - Cost: $4.99
  - Instant bonus: 750 Cube Points
  - Benefit: Double earning rate (100 points every 10 seconds)
- **How It Works Guide**: Easy-to-understand earning system overview

### 💰 Redeem Page
- **Robux Reward Packages**:
  - 400 Robux for $4.99
  - 800 Robux for $9.99
  - 1,200 Robux for $14.99 (Best Value)
  - 2,000 Robux for $24.99
- **Purchase Modal**: Confirmation dialog for all transactions
- **Instant Notifications**: Get feedback on every purchase

### 👤 Profile Page
- **User Information**: Display username, Cube Points, and VIP status
- **Statistics Dashboard**:
  - Current Cube Points balance
  - Total points earned (lifetime)
  - Points earning rate
  - Session time tracking
- **Profile Management**:
  - Edit username (1-20 characters)
  - Reset progress (with confirmation)

## Technology Stack 🛠️

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: Browser LocalStorage for data persistence
- **Design**: Modern, gradient-based UI with animations
- **Responsive**: Mobile-first design, works on all screen sizes

## Getting Started 🚀

### Installation
1. Clone the repository:
```bash
git clone https://github.com/tlmyburgh-sys/CubeRewards.git
cd CubeRewards
```

2. Open in your browser:
   - Simply open `index.html` in any modern web browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

## Usage 📱

### Earning Points
- Points are earned automatically every 10 seconds
- Standard rate: 50 points per 10 seconds
- VIP rate: 100 points per 10 seconds

### Purchasing VIP Pass
1. Navigate to the **Home** page
2. Click "Get VIP Pass - $4.99"
3. Confirm the purchase in the modal
4. Receive 750 bonus points immediately
5. Enjoy double earning rate!

### Redeeming Robux
1. Navigate to the **Redeem** page
2. Choose a Robux package
3. Click "Buy Now"
4. Confirm your purchase in the modal
5. Receive instant notification of successful purchase

### Managing Your Profile
1. Navigate to the **Profile** page
2. **Edit Username**: Click "Edit Username", enter new name (max 20 characters)
3. **Check Statistics**: View your earning rate and session time
4. **Reset Progress**: Click "Reset Progress" to start over (irreversible)

## Data Persistence 💾

All user data is saved locally in your browser using LocalStorage:
- Cube Points balance
- Total points earned
- Username
- VIP status

Data persists between sessions and survives browser restarts.

## Mobile Responsive Design 📲

The website is fully responsive and optimized for:
- **Desktop**: Full width with optimal spacing
- **Tablet**: Adjusted grid layouts and touch-friendly buttons
- **Mobile**: Compact design with optimized navigation

### Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## Design Highlights 🎨

### Color Scheme
- **Primary**: Indigo (#6366f1)
- **Secondary**: Pink (#ec4899)
- **VIP Gold**: Amber (#fbbf24)
- **Dark Background**: Slate (#0f172a)

### Animations
- Floating cube icon
- Rotating 3D cube display
- Smooth page transitions
- Button hover effects
- Notification slide-in/out

### UI Components
- Modern gradient buttons
- Responsive navigation bar
- Interactive modals
- Real-time data displays
- Animated cards and badges

## File Structure 📁

```
CubeRewards/
├── index.html      # Main HTML structure
├── styles.css      # Complete styling with animations
├── script.js       # Application logic and functionality
└── README.md       # Documentation (this file)
```

## Browser Support 🌐

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Roadmap 🗺️

- [ ] Backend integration for real purchases
- [ ] User authentication system
- [ ] Leaderboard functionality
- [ ] Daily login bonuses
- [ ] Referral system
- [ ] Achievement badges
- [ ] Sound effects and notifications
- [ ] Dark/Light theme toggle

## Contributing 🤝

Feel free to fork this project and submit pull requests for improvements!

## License 📄

This project is open source and available under the MIT License.

## Support 💬

For issues, questions, or suggestions, please open an issue on the GitHub repository.

---

**Made with ❤️ by tlmyburgh-sys**

Enjoy earning your Cube Points! 🎮✨
