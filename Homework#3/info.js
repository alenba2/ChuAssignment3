const tableInfo = {
  tableHeader: ['Student Name', 'Age', 'Phone', 'Address'],
  tableContent: [
    {
      'Student Name': 'John',
      Age: 19,
      Phone: '455 - 983 - 0903',
      Address: '123 Ave, San Francisco, CA, 94011',
    },
    {
      'Student Name': 'Alex',
      Age: 21,
      Phone: '455 - 983 - 0912',
      Address: '456 Rd, San Francisco, CA, 94012',
    },
    {
      'Student Name': 'Josh',
      Age: 22,
      Phone: '455 - 345 - 0912',
      Address: '789 Dr, Newark, CA, 94016',
    },
    {
      'Student Name': 'Matt',
      Age: 23,
      Phone: '321 - 345 - 0912',
      Address: '223 Dr, Sunnyvale, CA, 94016',
    },
  ],
}

const list = ['HTML', 'JavaScript', 'CSS', 'React', 'Redux', 'Java']

const dropDownList = [
  { value: 'newark', content: 'Newark' },
  { value: 'santaClara', content: 'Santa Clara' },
  { value: 'unionCity', content: 'Union City' },
  { value: 'albany', content: 'Albany' },
  { value: 'dalyCity', content: 'Daly City' },
  { value: 'sanJose', content: 'San Jose' },
]

function myStart() {
  // Q1
  var x = document.createElement('TR')
  x.setAttribute('id', 'myTr')
  document.getElementById('table').appendChild(x)

  for (let i = 0; i < tableInfo.tableHeader.length; i++) {
    var y = document.createElement('TH')
    var t = document.createTextNode(tableInfo.tableHeader[i])
    y.appendChild(t)
    document.getElementById('myTr').appendChild(y)
  }

  for (let i = 0; i < tableInfo.tableContent.length; i++) {
    var x1 = document.createElement('TR')
    x1.setAttribute('id', 'myTr1' + i)
    document.getElementById('table').appendChild(x1)

    var y = document.createElement('TD')
    var t = document.createTextNode(tableInfo.tableContent[i]['Student Name'])
    y.appendChild(t)
    document.getElementById('myTr1' + i).appendChild(y)

    var y = document.createElement('TD')
    var t = document.createTextNode(tableInfo.tableContent[i]['Age'])
    y.appendChild(t)
    document.getElementById('myTr1' + i).appendChild(y)

    var y = document.createElement('TD')
    var t = document.createTextNode(tableInfo.tableContent[i]['Phone'])
    y.appendChild(t)
    document.getElementById('myTr1' + i).appendChild(y)

    var y = document.createElement('TD')
    var t = document.createTextNode(tableInfo.tableContent[i]['Address'])
    y.appendChild(t)
    document.getElementById('myTr1' + i).appendChild(y)
  }

  // Q2 Ordered
  for (let i = 0; i < list.length; i++) {
    var x = document.createElement('LI')
    var y = document.createTextNode(list[i])
    x.appendChild(y)
    document.getElementById('ordered').appendChild(x)
  }

  // Q2 Unordered
  for (let i = 0; i < list.length; i++) {
    var x = document.createElement('LI')
    var y = document.createTextNode(list[i])
    x.appendChild(y)
    document.getElementById('unorder').appendChild(x)
  }

  // Q3

  for (let i = 0; i < dropDownList.length; i++) {
    var x = document.createElement('option')
    x.setAttribute('value', dropDownList[i].value)
    y = document.createTextNode(dropDownList[i].content)
    x.appendChild(y)
    document.getElementById('selector').appendChild(x)
  }
}
