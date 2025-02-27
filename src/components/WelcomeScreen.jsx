import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import globalStyles, { spacing, colors } from '../styles/globalStyles';

const WelcomeScreen = ({ navigation }) => {
  const [language, setLanguage] = useState('english');

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={[globalStyles.centeredContainer, { paddingHorizontal: spacing.xl }]}>
        <Image 
          source={require('../assets/icon.png')} 
          style={globalStyles.logo} 
        />
        
        <Text style={globalStyles.title}>Welcome to PlantHealth</Text>
        <Text style={globalStyles.subtitle}>
          Instantly diagnose and receive treatment advice for potato leaf diseases
        </Text>
        
        <View style={{ width: '100%', marginTop: spacing.lg }}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Login')}
            style={globalStyles.button}
          >
            <Text style={globalStyles.buttonText}>Sign Up / Login</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => navigation.navigate('Home')}
            style={globalStyles.secondaryButton}
          >
            <Text style={globalStyles.secondaryButtonText}>Continue as Guest</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{ width: '100%', marginTop: spacing.lg }}>
          <Picker
            selectedValue={language}
            onValueChange={(itemValue) => setLanguage(itemValue)}
            style={globalStyles.picker}
          >
            <Picker.Item label="English" value="english" />
            <Picker.Item label="español" value="espanol" />
            <Picker.Item label="हिंदी" value="hindi" />
          </Picker>
        </View>

        {/* Chatbot Button */}
        <TouchableOpacity 
          onPress={() => navigation.navigate('Chatbot')}
          style={{
            position: 'absolute',
            bottom: spacing.xl,
            right: spacing.xl,
            backgroundColor: colors.primary,
            padding: spacing.md,
            borderRadius: 50,
            elevation: 3,
          }}
        >
          <Text style={{ color: colors.white, fontSize: spacing.md }}>🤖 Chat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
