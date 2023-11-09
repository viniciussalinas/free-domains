addSubDomain({
  description: 'portfolio website', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'viniciussalinas', // desired subdomain name
  owner: {
    repo: 'https://github.com/viniciussalinas/portfolio',
    email: 'vinicius_salis@hotmail.com',
  },
  record: {
    CNAME: 'viniciussalinas.github.io',
  },
})