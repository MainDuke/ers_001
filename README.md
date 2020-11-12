# Easy Restful Sender 
1. no install
2. easy controll
3. It is easy for stakeholders to add specially requested functions.

---
Why development?
---
We are working on a project with various companies.
People who were not familiar with the development tools also existed in the project.
Restful tools (such as Postman) make it easy to request restful with Json data, but they needed simpler tools.

So I wanted to make tools that could develop quickly, 
that do not need to access separate servers, 
and that possible run without installing programs.

so, My Choose point.

- Electron : Build cross-platform desktop apps with JavaScript, HTML, and CSS
1. It's easy to handle about Json Type (just in my opinion...)
2. Electron-forge provide can make standalone app.
3. html & css be familiar to me for design

---

Install : https://www.electronjs.org/docs/tutorial/quick-start#package-and-distribute-the-application
```
ers_001/
├── package.json
├── main.js
└── src
    └── ers_confing.js
    └── restful_controller.js
    └── view
        └── main.html
        └── ers_style.css

```

```
# in project folder, install
npm init -y
npm i --save-dev electron
npm start

# Package and distribute the application
npx @electron-forge/cli import
npm run make
```
