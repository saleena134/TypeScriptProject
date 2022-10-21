import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, Touchable, TouchableOpacity } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

const Colors = {
  dark: {
    background: '#1E1E1E',
    circle: '#252525',
    text: '#F8F8F8',
  },
  light: {
    background: '#F8F8F8',
    circle: '#FFF',
    text: '#1E1E1E',
  },
};

const SWITCH_TRACK_COLOR = {
  true: 'rgba(256, 0, 256, 0.2)',
  false: 'rgba(0,0,0,0.1)',
};

type Theme = 'light' | 'dark';

export default function ThemeChanger() {
  const [theme, setTheme] = useState<Theme>('light');

  const progress = useDerivedValue(() => {
    return withTiming(theme === 'dark' ? 1 : 0);
  });

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background]
    );

    return {
      backgroundColor,
    };
  });

  const rCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle]
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.container, rStyle]}>
      <Animated.View style={[styles.circle, rCircleStyle]}>
        <TouchableOpacity onPress={(toggled) => {
            setTheme(toggled ? 'dark' : 'light');
          }}><Text>Click</Text></TouchableOpacity>
        <Switch
          value={theme === 'dark'}
          onValueChange={(toggled) => {
            setTheme(toggled ? 'dark' : 'light');
          }}
          // trackColor={SWITCH_TRACK_COLOR}
          // thumbColor={'violet'}
        />
      </Animated.View>
    </Animated.View>
  );
}

const SIZE = Dimensions.get('window').width * 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.05,
    shadowRadius: 15,
    shadowOffset: {
      height: 20,
      width: 0,
    },
    shadowColor: 'black',
    backgroundColor: '#fff',
    elevation: 8,
  },
});