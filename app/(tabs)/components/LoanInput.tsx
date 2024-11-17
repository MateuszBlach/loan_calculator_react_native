import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

interface LoanInputProps {
  loanAmount: string;
  interestRate: string;
  months: string;
  isEqualInstallments: boolean;
  setLoanAmount: (amount: string) => void;
  setInterestRate: (rate: string) => void;
  setMonths: (months: string) => void;
  setIsEqualInstallments: (isEqual: boolean) => void;
}

export default function LoanInput({
  loanAmount,
  interestRate,
  months,
  isEqualInstallments,
  setLoanAmount,
  setInterestRate,
  setMonths,
  setIsEqualInstallments,
}: LoanInputProps) {
  return (
    <View>
      <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#1565C0', marginBottom: 16, marginTop: 20 }}>
        Kalkulator Pożyczki
      </Text>
      <TextInput
        placeholder="Kwota pożyczki (PLN)"
        keyboardType="numeric"
        value={loanAmount}
        onChangeText={setLoanAmount}
        style={styles.input}
      />
      <TextInput
        placeholder="Oprocentowanie (%)"
        keyboardType="numeric"
        value={interestRate}
        onChangeText={setInterestRate}
        style={styles.input}
      />
      <TextInput
        placeholder="Liczba miesięcy"
        keyboardType="numeric"
        value={months}
        onChangeText={setMonths}
        style={styles.input}
      />

      <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 16 }}>Rodzaj rat:</Text>
      <View style={{ flexDirection: 'column', marginTop: 8, marginBottom: 20 }}>
        <TouchableOpacity onPress={() => setIsEqualInstallments(true)} style={styles.radioOption}>
          <Text style={isEqualInstallments ? styles.radioSelected : styles.radioText}>Równe</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsEqualInstallments(false)} style={styles.radioOption}>
          <Text style={!isEqualInstallments ? styles.radioSelected : styles.radioText}>Malejące</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
