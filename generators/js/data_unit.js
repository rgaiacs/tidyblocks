//
// Generate code to create 1x1 data frame for testing purposes.
//
Blockly.JavaScript['data_unit'] = (block) => {
  const result = `new TidyBlocksDataFrame([{'single': 1}])`
  return result
}
