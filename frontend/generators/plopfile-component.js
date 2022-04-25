module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Qual é o nome do componente?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.tsx",
        templateFile: "template-component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.ts",
        templateFile: "template-component/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.d.ts",
        templateFile: "template-component/types.d.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/i18n{{pascalCase name}}.pt.ts",
        templateFile: "template-component/i18n.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/i18n{{pascalCase name}}.en.ts",
        templateFile: "template-component/i18n.ts.hbs",
      },
      {
        type: "modify",
        path: "../src/libs/i18next/locales/pt.ts",
        pattern: /(";\n\n)/,
        template:
          '";\nimport i18n{{pascalCase name}}Pt from "components/{{pascalCase name}}/i18n{{pascalCase name}}.pt";\n\n',
      },
      {
        type: "modify",
        path: "../src/libs/i18next/locales/pt.ts",
        pattern: /(translation: {)/g,
        template: "$1\n    ...i18n{{pascalCase name}},",
      },
      {
        type: "modify",
        path: "../src/libs/i18next/locales/en.ts",
        pattern: /(";\n\n)/,
        template:
          '";\nimport i18n{{pascalCase name}}En from "components/{{pascalCase name}}/i18n{{pascalCase name}}.en";\n\n',
      },
      {
        type: "modify",
        path: "../src/libs/i18next/locales/en.ts",
        pattern: /(translation: {)/g,
        template: "$1\n    ...i18n{{pascalCase name}},",
      },
    ],
  });
};
