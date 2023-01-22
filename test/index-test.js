import TextLintTester from 'textlint-tester';

const tester = new TextLintTester();

const testConfig = {
  rules: [
    {
      ruleId: 'prh',
      rule: require('textlint-rule-prh'),
      options: {
        rulePaths: [
          './src/prh.yml'
        ]
      },
    },
  ]
}

// 辞書が正しくロードされていることだけを確認する
tester.run('prh rule file', testConfig, {
  valid: [
    '髙橋ミナミ',
    '諏訪彩花',
    '田中あいみ',
  ],
  invalid: [
    {
      text: '高橋未奈美',
      errors: [{
        message: '高橋未奈美 => 髙橋ミナミ\n2020/12/20改名'
      }]
    },
    {
      text: '諏訪彩香',
      errors: [{
        message: '諏訪彩香 => 諏訪彩花'
      }]
    },
    {
      text: '田中愛美',
      errors: [{
        message: '田中愛美 => 田中あいみ'
      }]
    },
  ]
});
