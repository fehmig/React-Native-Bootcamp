import { View, Text, SafeAreaView, FlatList, Pressable, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';

const App = () => {

    const data = [
        { id: '1', title: 'Head & Face', color: '#EB7662', diseases: 11 },
        { id: '2', title: 'Back & Neck', color: '#8DC4BB', diseases: 11 },
        { id: '3', title: 'Elbow & Shoulders', color: '#F2982F', diseases: 11 },
        { id: '4', title: 'Hand & Arm', color: '#327389', diseases: 11 },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{
                backgroundColor: item.color,
                borderRadius: 15,
                padding: 15,
                marginBottom: 15,
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5, color: 'white' }}>
                {item.title}
            </Text>
            <Text style={{ color: '#E9F2FF' }}>{`${item.diseases} diseases`}</Text>
        </TouchableOpacity>
    );


    return (
        <>
            <SafeAreaView style={{ padding: 25, flex: 1, }}>

                <View
                    style={{

                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <Text style={{ color: 'gray' }}>Friday, 15 Dec</Text>
                    <Text style={{ color: 'gray' }}>Search</Text>
                </View>

                <View style={{ paddingVertical: 15 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', paddingBottom: 5 }}>
                        Learn
                    </Text>
                    <Text>Choose part of the body</Text>
                </View>

                <View style={{ marginTop: 20 }}>
                 
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />
              
                </View>

            </SafeAreaView>
        </>
    );
};

export default App;