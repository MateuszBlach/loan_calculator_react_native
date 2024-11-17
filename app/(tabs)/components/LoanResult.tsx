import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { styles } from '../styles';

interface LoanResultScreenProps {
  installments: number[];
  onBack: () => void;
}

export default function LoanResultScreen({ installments, onBack }: LoanResultScreenProps) {
  const totalPayment = installments.reduce((acc, installment) => acc + installment, 0);

  return (
    <ScrollView style={styles.container}>
      <Button title="Wróć" onPress={onBack} color="#1565C0" />
      <Text style={styles.title}>Wyniki Kalkulacji</Text>
      <Text style={styles.total}>Łączna kwota do spłaty: {totalPayment.toFixed(2)} PLN</Text>
      <Text style={styles.subtitle}>Raty miesięczne:</Text>

      <View style={styles.table}>
        <View style={styles.tableRowHeader}>
          <Text style={styles.tableHeaderText}>Miesiąc</Text>
          <Text style={styles.tableHeaderText}>Kwota raty (PLN)</Text>
        </View>

        {installments.map((installment, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{index + 1}</Text>
            <Text style={styles.tableCell}>{installment.toFixed(2)} PLN</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

