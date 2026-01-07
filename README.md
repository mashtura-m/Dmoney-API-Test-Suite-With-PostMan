# API-Test-Suite-With-PostMan

This project performs automated API testing on the **DMoney** financial application. It utilizes **Postman** for test script creation and **Newman** for command-line execution, generating comprehensive HTML reports to visualize test results.

## 🛠️ Technology Stack
* **Postman**: API Request creation and manual testing.
* **Newman**: CLI tool to run Postman collections.
* **Newman-Reporter-Htmlextra**: Generates detailed, interactive HTML reports.
* **Node.js**: Runtime environment for executing the scripts.

## 📂 Project Structure
```bash
├── postman/collections   # Contains the exported Postman Collection & Environment JSONs
├── report                # Stores the generated HTML reports
├── report.js             # Script to run tests and generate reports
├── .gitignore            # Files to ignore (node_modules, env, etc.)
├── LICENSE               # License file
└── README.md             # Project documentation


```
## 🚀 Prerequisites

1. **Node.js**: Ensure Node.js is installed. [Download here](https://nodejs.org/).
2. **Clone the Repo**:
```bash
git clone [https://github.com/mashtuara-m/Dmoney-API-Test-Suite-With-PostMan.git](https://github.com/mashtuara-m/Dmoney-API-Test-Suite-With-PostMan.git)

```


3. **Install Dependencies**:
Open your terminal in the project folder and run:
```bash
npm install

```



## 🏃‍♂️ How to Run the Tests

### Option 1: Generate HTML Report (Recommended)

This script runs the collection and automatically saves the results in the `report` folder.

```bash
node report.js

```

*Note: Ensure your `report.js` file points to the correct JSON path inside the `postman/collections` folder.*

### Option 2: Run via Terminal (Standard Newman)

If you only want to see the output in the console:

```bash
npx newman run ./postman/collections/collection.json -e ./postman/collections/env.json

```

*(Replace `collection.json` and `env.json` with your actual filenames found inside the postman/collections folder)*

---

## 📑 Test Documentation

> Click the links below to view the detailed project documentation.

| Document | Description | Link |
| --- | --- | --- |
| **API Documentation** | Detailed API endpoints and usage | [View API Documentation](https://dmoney.roadtocareer.net/api-docs/transaction/#/default) |
| **Test Cases** | Standard test scenarios (Excel/Sheet) | [View Test Cases](https://docs.google.com/spreadsheets/d/1xqejWlLz_e_FKQiF9ueJ49_bXUmaxwkn/edit?usp=sharing&ouid=117963010490913010434&rtpof=true&sd=true) |
| **Bug Report** | List of bugs found during testing | [View Bug Report](https://docs.google.com/spreadsheets/d/1ccfOtDja1ZITBTcqcQ0Lutv_aEH2o7BD/edit?usp=sharing&ouid=117963010490913010434&rtpof=true&sd=true) |

---

## 📊 Sample Report

<img width="766" height="851" alt="report" src="https://github.com/user-attachments/assets/2cc61477-6e7a-4053-a27f-9172c1b84e9f" />


---

## 👥 Contributors & Reviewers

**Salman Srabon** 📧 Email: salmansrabon@gmail.com

*Role: QA Engineer / Reviewer*

```

```
