module.exports = {
    types: [
      { value: 'feat', name: 'feat:     增加新功能' },
      { value: 'fix', name: 'fix:      修改bug' },
      { value: 'docs', name: 'docs:     项目文档发生改变' },
      {
        value: 'style',
        name: 'style:    不影响代码含义的更改\n            (white-space, formatting, missing semi-colons, etc)',
      },
      {
        value: 'refactor',
        name: 'refactor: 既不修复错误也不添加功能的代码更改',
      },
      {
        value: 'perf',
        name: 'perf:     提高性能的代码更改',
      },
      { value: 'test', name: 'test:     添加丢失的测试' },
      {
        value: 'chore',
        name: 'chore:    对生成过程或辅助工具的更改\n            and libraries such as documentation generation',
      },
      { value: 'revert', name: 'revert:   R代码回滚' },
      { value: 'WIP', name: 'WIP:      工作中' },
    ],
  
    scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],
  
    usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',
  
    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
  
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
      type: "Select the type of change that you're committing:",
      scope: '\nDenote the SCOPE of this change (optional):',
      // used if allowCustomScopes is true
      customScope: 'Denote the SCOPE of this change:',
      subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional):\n',
      footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },
  
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    // skip any questions you want
    // skipQuestions: ['scope', 'body'],
  
    // limit subject length
    subjectLimit: 100,
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
  };
  