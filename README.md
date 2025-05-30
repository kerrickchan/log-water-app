# Water Tracker App

A simple and intuitive React Native application to help you track your daily water intake and stay hydrated.

## Features

- 🎯 Set personalized daily water intake goals
- 💧 Log water consumption with a single tap
- 📊 Visual progress bar to track your daily progress
- 📈 Real-time percentage display of goal completion
- 🔄 Reset daily intake counter
- 📱 Clean and responsive mobile interface

## Screenshots

<!-- Add screenshots here when available -->
*Screenshots coming soon*

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- React Native development environment
- Android Studio (for Android) or Xcode (for iOS)

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd log-water-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. For iOS (macOS only):
```bash
cd ios
pod install
cd ..
```

4. Start the Metro bundler:
```bash
npm start
# or
yarn start
```

5. Run the app:
```bash
# For Android
npm run android
# or
yarn android

# For iOS
npm run ios
# or
yarn ios
```

## Usage

1. **Set Your Goal**: Enter your daily water intake goal in glasses (default is 8)
2. **Log Water**: Tap "Log Water" each time you drink a glass of water
3. **Track Progress**: Watch the progress bar fill up and see your percentage completion
4. **Reset**: Use "Reset Intake" to start fresh (typically at the beginning of a new day)

## Project Structure

```
log-water-app/
├── App.tsx              # Main water tracker component
├── README.md           # Project documentation
├── package.json        # Dependencies and scripts
└── ...                # Other React Native project files
```

## Component Details

### WaterTracker Component

The main component (`App.tsx`) includes:

- **State Management**: Uses React hooks to manage daily goal and current intake
- **Progress Calculation**: Calculates and displays progress percentage
- **Interactive Controls**: Buttons for logging water and resetting intake
- **Responsive Design**: Styled with React Native StyleSheet

## Customization

You can customize the app by modifying:

- Default daily goal (currently set to 8 glasses)
- Water increment amount per log (currently 1 glass)
- UI colors and styling in the StyleSheet
- Progress bar appearance

## Future Enhancements

- [ ] Data persistence across app sessions
- [ ] Weekly/monthly tracking history
- [ ] Reminder notifications
- [ ] Different measurement units (oz, ml, cups)
- [ ] Custom water amounts per log
- [ ] Achievement badges
- [ ] Export data functionality

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, please open an issue on the repository.

---

Stay hydrated! 💧
