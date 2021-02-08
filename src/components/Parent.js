import Child from './Child'

const innerData = '父母元件內的資料'

function Parent() {
  return <Child data={innerData} />
}

export default Parent
