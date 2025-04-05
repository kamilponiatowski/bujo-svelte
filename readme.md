# Da Vinci-Style Bullet Journal

A digital Bullet Journal inspired by Leonardo da Vinci's style, built using Svelte and SvelteKit.

## Installation

```bash
# install dependencies
npm install

# run development server
npm run dev

# build production version
npm run build
```

## Project Structure

- **src/lib/components** - Svelte components categorized:
  - **layout** - page layout components
  - **shared** - components shared across different views
  - **svg** - SVG components for Da Vinci-style sketches

- **src/lib/styles** - SCSS files:
  - **_variables.scss** - variables for colors, fonts, etc.
  - **_mixins.scss** - SCSS mixins
  - **_typography.scss** - typographic styles
  - **_layout.scss** - page layout styles
  - **app.scss** - main SCSS file importing others

- **src/routes** - Application pages corresponding to Bullet Journal sections:
  - **index** - home page
  - **daily** - daily log
  - **weekly** - weekly view
  - **monthly** - monthly view
  - **habits** - habit tracking
  - **values** - my values
  - **projects** - projects
  - **family** - family time
  - **ideas** - creative ideas
  - **gratitude** - gratitude journal
  - **reflection** - spiritual reflections
  - **balance** - life balance

## Technologies Used

- **Svelte/SvelteKit** - framework
- **TypeScript** - type checking
- **SCSS** - CSS preprocessor
- **SVG** - for Da Vinci-style sketches

## Project Structure

```
bujo-svelte/
├── src/
│   ├── lib/                  # Reusable library code
│   │   ├── components/       # Svelte UI components
│   │   │   ├── layout/       # Page structure components
│   │   │   ├── shared/       # Shared UI components
│   │   │   └── svg/          # SVG and icon components
│   │   └── styles/           # SCSS styling system
│   └── routes/               # Page components and routing
├── static/                   # Static assets
├── config files/             # Project configuration
```

### Key Directories

- **`src/lib/components/`**
  - **`layout/`**: Core page structure (Sidebar, PageLayout)
  - **`shared/`**: Reusable components like DailyLog, ProjectCard, HabitTracker
  - **`svg/`**: Da Vinci-inspired sketches and icons

- **`src/lib/styles/`**: Modular SCSS system
  - Variables, mixins, typography, and layout styles
  - Centralized styling approach

- **`src/routes/`**: SvelteKit routing
  - Each subdirectory represents a different journal section
  - Includes pages for daily, weekly, monthly logs, habits, projects, etc.

- **`static/`**: Static assets like fonts and favicon
- **`config files/`**: Project configuration for Svelte, TypeScript, Vite

## Extended Development Roadmap

### 1. Advanced Data Management
- **Multi-layered Data Storage System**
  - Local storage in IndexedDB with encryption options
  - Cloud synchronization (Firebase, Supabase)
  - Backup and export capabilities:
    - PDF generation with sketch preview
    - Markdown export
    - JSON/CSV formats
    - Compatibility with physical journaling formats

- **Advanced Analytics**
  - Habit progress charts with predictive modeling
  - Productivity analysis
  - Automated monthly and yearly report generation
  - Integration with productivity tools like RescueTime

### 2. AI-Powered Intelligence
- **AI Journaling Assistance**
  - Reflection suggestions
  - Entry sentiment analysis
  - Automatic entry tagging
  - Inspirational quote generation
  - Book/article recommendations based on journal content

### 3. Enhanced Personalization
- **Themes and Skins**
  - Dynamic theme generation inspired by:
    - Da Vinci's style
    - Other artists/historical periods
    - Seasonal variations
    - User's emotional state

- **Advanced Interface Customization**
  - Custom page templates
  - Layout generators
  - Advanced SVG editor

### 4. Ecosystem Integrations
- **System Connections**
  - Google/Apple Calendar
  - Todoist, Trello
  - Fitness trackers (Fitbit, Apple Health)
  - Hydration and health systems
  - Spotify mood synchronization

### 5. Social Features
- **Secure Sharing**
  - Public/private profiles
  - Group challenges
  - Anonymous feedback
  - Ideas marketplace

### 6. Augmented Reality and Interaction
- **Innovative Interfaces**
  - Stylus/Apple Pencil support
  - Handwriting recognition
  - AR goal visualization
  - Physical print/sticker generation

### 7. Advanced Notifications and Support
- **Intelligent Notification System**
  - Contextual reminders
  - Adaptive notifications
  - Meditation support
  - Voice note integration

### 8. Personal Development Tools
- **Specialized Modules**
  - Financial coach
  - Career planning
  - Relationship management
  - Dream journal
  - Life energy calculator

## Implementation Strategy
1. **MVP (Minimum Viable Product)**
   - Core journaling functionality
   - Stable architecture
   - Basic integrations

2. **Expanded Phase**
   - Adding specialized modules
   - AI infrastructure development
   - Advanced integration testing

3. **Target Phase**
   - Full personalization
   - Ecosystem of mutually supportive tools
   - Continuous evolution based on user feedback

## Future Technologies
- WebAssembly
- In-browser Machine Learning
- Blockchain for data security
- Quantum Computing exploration

## Best Practices
- Continuous refactoring
- Unit and E2E testing
- Performance monitoring
- Data security
- Accessibility (WCAG compliance)

## License
[To be determined - preferably open source]

## Contact and Support
poniatowski.dev@gmail.com & producktive@proton.me