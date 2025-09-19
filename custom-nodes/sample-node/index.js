// Custom node scaffold
/**
 * Example custom n8n node scaffold.
 */
module.exports = {
  description: {
    displayName: 'Sample Node',
    name: 'sampleNode',
    group: ['transform'],
    version: 1,
    description: 'A sample custom node for n8n.',
    defaults: {
      name: 'Sample Node',
    },
    inputs: ['main'],
    outputs: ['main'],
    properties: [
      {
        displayName: 'Sample Field',
        name: 'sampleField',
        type: 'string',
        default: '',
        description: 'A sample input field.',
      },
    ],
  },
  execute: async function() {
    // Node execution logic here
    return this.prepareOutputData(this.getInputData());
  }
};