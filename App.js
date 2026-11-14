import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Boat from './components/Boat';

const Boats = [
  {id:0, name:"Sea Ray 500 Sundancer", description: "Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.", image: require("./img/sea_ray.jpg")},
  {id:1, name:"Four Winns Horizon 180", description: "A sporty look and refined details truly set the Horizon 180 above all others.", image: require("./img/four_winns.jpg")},
  {id:2, name:"Flipper 640 ST", description: "A modern take on the classic, traditional hardtop and perfect for a family picnic.", image: require("./img/flipper.jpg")},
  {id:3, name:"Princess V48", description: "There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.", image: require("./img/princess.jpg")},
  {id:4, name:"Bayliner 175 Bowrider", description: "Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.", image: require("./img/bayliner.jpg")},
  {id:5, name:"Fairline Targa 47", description: "Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.", image: require("./img/fairline.jpg")}
]

export const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30,
    borderWidth: 5,
    borderColor: 'grey',
  },
  child: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    backgroundColor: '#A9A9A9',
    borderColor: 'black',
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'grey',
  }
})

class AllBoats extends React.Component {
  render(){
    return (
        <ScrollView style={styles.parent}>
          <Text style={[styles.child, styles.title, {color: "black"}]}>GetABoat-For Sale</Text>
            {Boats.map((boat) => (
                <View key={boat.id} style={styles.child}>
                <Boat
                    name={boat.name}
                    description={boat.description}
                    poster={boat.image}
                />
                </View>
            ))}
        </ScrollView>
    )
  }
}
export default AllBoats