```javascript
//In your component
<FlatList
  data={this.state.data}
  renderItem={({item}) => <Text>{item.value}</Text>}
  keyExtractor={(item, index) => index}
/>

//Incorrect way to update the state
this.setState({data: [...this.state.data, newValue]});
```