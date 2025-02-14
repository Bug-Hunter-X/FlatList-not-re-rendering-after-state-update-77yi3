```javascript
//In your component
<FlatList
  data={this.state.data}
  renderItem={({item}) => <Text>{item.value}</Text>}
  keyExtractor={(item) => item.id} // Use a unique ID
/>

//Correct way to update the state using unique ID
const newItem = { id: Date.now(), value: newValue };
this.setState({data: [...this.state.data, newItem]});
```