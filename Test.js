var arr = [{
    account: 'UEM Infrastructure',
    cost: '1.6502402491',
    environment: 'PROD'
},
{ 
    account: 'CBS', 
    cost: '1.6502402491', 
    environment: 'PROD'
},
{
    account: 'DatalakeProd',
    cost: '1.6502402491',
    environment: 'PROD'
},
{
    account: 'DatalakeDev',
    cost: '1.6502402491',
    environment: 'DEV'
}];

const data = arr.reduce(
    (arr1, e) => arr1.set(e.environment, [...arr1.get(e.environment)||[], e]),
    new Map()
);
  console.log(data);