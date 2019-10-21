const { Component } = require('@serverless/core');

class Website extends Component {
  async default(inputs = { env: 'dev', name: 'my-site' }) {
    const template = await this.load('@serverless/template', inputs.env);

    const output = await template({
      template: {
        name: inputs.name,
        admin: {
          component: '@serverless/website@4.0.0',
          inputs: {
            code: {
              src: 'dist',
              root: './'
            },
            env: {},
            region: `us-east-2`,
            bucketName: `sls-${inputs.env}-domain-com`,
            domain: `sls-${inputs.env}.domain.com`
          }
        }
      }
    });

    return output;
  }

  async remove(inputs = { env: 'dev' }) {
    const website = await this.load('@serverless/template', inputs.env);

    await website.remove();

    return {};
  }
}

module.exports = Website;
