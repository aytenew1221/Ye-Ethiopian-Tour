# 🇪🇹 Ye Ethiopia Tour

**Ye Ethiopia Tour (የኢትዮጵያ ጉዞ)** is a React-based tourism and travel-planning web application designed for people traveling within Ethiopia.

The project helps local travelers discover Ethiopian destinations, explore transportation options, view estimated travel fees in ETB, and plan their trips.

The application will support **English and Amharic (አማርኛ)**.

---

## 🎯 Project Goal

The goal of Ye Ethiopia Tour is to provide organized and easy-to-understand travel information for people who want to explore Ethiopia.

Users will be able to:

- Explore destinations in Ethiopia
- View destination details
- Discover tourist attractions
- Explore different transportation methods
- View estimated transportation fees in ETB
- Calculate an estimated trip budget
- Switch between English and Amharic
- Plan a simple trip

> **Note:** Travel prices displayed by the application are intended as estimated/sample prices unless connected to a reliable current-price source.

---

## 👤 Target Users

The main users are:

- Ethiopian local travelers
- Students and young travelers
- Families planning domestic trips
- People interested in exploring Ethiopian destinations

---

## 🗺️ Main Pages

The current application contains the following routes:

| Route               | Page                | Purpose                                           |
| ------------------- | ------------------- | ------------------------------------------------- |
| `/`                 | Home                | Introduces Ye Ethiopia Tour                       |
| `/destinations`     | Destinations        | Displays Ethiopian destinations                   |
| `/destinations/:id` | Destination Details | Displays information about a specific destination |
| `/travel`           | Travel              | Shows transportation methods and estimated fees   |
| `/plan-trip`        | Plan Trip           | Helps users estimate their trip budget            |
| `/about`            | About               | Provides information about the project            |
| `*`                 | Not Found           | Handles invalid URLs                              |

---

## 🧭 Application Layout

The application uses a shared layout:

```text
Navbar
   ↓
Page
   ↓
Footer
```

The `Layout` component uses React Router's `Outlet` to display the current page.

```text
src/
├── context/
│   ├── ThemeContext.jsx
├── components/
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── layouts/
│   └── Layout.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Destinations.jsx
│   ├── DestinationDetails.jsx
│   ├── Travel.jsx
│   ├── PlanTrip.jsx
│   ├── About.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚛️ Technologies

The project is built with:

- React
- Vite
- React Router DOM
- JavaScript
- HTML5
- CSS3

Future features may use:

- React Context API
- `useState`
- `useEffect`
- `useParams`
- `useSearchParams`
- LocalStorage
- JSON data
- Form validation

---

## 🌍 Language Support

The application is planned to support:

### English

```text
Home
Destinations
Travel
Plan Trip
About
```

### Amharic

```text
መነሻ
መዳረሻዎች
ጉዞ
ጉዞ ያቅዱ
ስለ እኛ
```

The language feature will allow users to switch between English and Amharic.

---

## 🚌 Transportation

Ye Ethiopia Tour will provide information about different ways to travel between destinations.

Possible transportation methods include:

- 🚌 Bus
- 🚗 Private Car
- 🚕 Taxi
- ✈️ Airplane

For each option, the application may display:

- Transportation method
- Estimated price
- Currency
- Estimated travel duration
- Starting location
- Destination

Example:

```text
Addis Ababa → Bahir Dar

🚌 Bus
Estimated Fee: 1,200 ETB
Duration: 9–10 hours
```

Prices will be treated as estimates because transportation costs can change.

---

## 💰 Trip Budget

The Trip Planner will allow users to estimate their travel expenses.

Possible expenses include:

```text
Transportation
Accommodation
Food
Entrance Fees
Other Expenses
-------------------
Estimated Total
```

For example:

```text
Transportation     2,400 ETB
Accommodation      2,400 ETB
Food               4,500 ETB
Other Expenses       500 ETB
---------------------------
Total              9,800 ETB
```

---

## 📊 Planned Data

Destination information will eventually be stored in JSON files.

Example:

```text
public/
└── data/
    ├── destinations.json
    └── travel-options.json
```

Destination data may include:

- Destination name
- Amharic name
- Region
- Category
- Description
- Attractions
- Images

Travel data may include:

- Starting location
- Destination
- Transportation method
- Estimated fee
- Travel duration

---

## 🚀 Current Project Status

### Completed

- [x] Vite + React project created
- [x] React Router installed
- [x] Main routes created
- [x] Dynamic destination route created
- [x] 404 Not Found route created
- [x] Shared Layout created
- [x] Navbar created
- [x] Footer created
- [x] Basic CSS styling added

### Planned

- [ ] Add Ethiopian destinations data
- [ ] Add destination images
- [ ] Add transportation data
- [ ] Add estimated ETB fees
- [ ] Add destination search
- [ ] Add category filtering
- [ ] Add Amharic/English language switching
- [ ] Add trip budget calculator
- [ ] Add LocalStorage for saved trip plans
- [ ] Improve responsive/mobile design
- [ ] Deploy the application

---

## 📁 Project Structure

```text
ye-ethiopia-tour/
│
├── public/
│   ├── data/
│   └── images/
│
├── src/
├   ├── context
│   │   └── ThemeContext.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── layouts/
│   │   └── Layout.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Destinations.jsx
│   │   ├── DestinationDetails.jsx
│   │   ├── Travel.jsx
│   │   ├── PlanTrip.jsx
│   │   ├── About.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
```

---

## 🎓 Capstone Project

Ye Ethiopia Tour is being developed as a **React Capstone Project** for learning and demonstrating modern frontend development concepts.

The project will be developed incrementally throughout the course, with new React and Next.js concepts applied to the application as they are introduced.

---

## 🇪🇹 Vision

**Discover Ethiopia. Plan Your Journey.**

**ኢትዮጵያን ይወቁ። ጉዞዎን ያቅዱ።**

Ye Ethiopia Tour aims to make domestic travel information easier for people who want to explore Ethiopia.
