# React Native FlatList Re-rendering Issue

This repository demonstrates a common issue encountered when working with FlatLists in React Native: the list failing to re-render after updating its data source. The problem arises from using the index as the key prop in the `keyExtractor` function, which leads to FlatList's inefficient handling of updates.  The solution involves using a unique identifier for each item in the data array, allowing FlatList to correctly detect and reflect the changes.

## Setup

Clone the repository and run:
```bash
npm install
react-native run-android  //or react-native run-ios
```