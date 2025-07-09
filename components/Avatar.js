import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Avatar({ uri }) {
  return <Image source={{ uri }} style={styles.avatar} />;
}

const styles = StyleSheet.create({
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 16 },
});