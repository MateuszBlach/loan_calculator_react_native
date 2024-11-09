import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';

export default function LoanCalculatorApp() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [months, setMonths] = useState('');
  const [isEqualInstallments, setIsEqualInstallments] = useState(true);
  const [installments, setInstallments] = useState<number[]>([]); // specify type as number[]
  const [showResults, setShowResults] = useState(false);

  const calculateInstallments = () => {
    const loan = parseFloat(loanAmount);
    const rate = parseFloat(interestRate);
    const duration = parseInt(months);

    if (loan && rate && duration) {
      const monthlyRate = rate / 100 / 12;
      let calculatedInstallments: number[] = [];

      if (isEqualInstallments) {
        const equalInstallment = loan * monthlyRate / (1 - Math.pow(1 + monthlyRate, -duration));
        calculatedInstallments = Array(duration).fill(equalInstallment);
      } else {
        let remainingAmount = loan;
        const principalPayment = loan / duration;

        for (let i = 0; i < duration; i++) {
          const interestForMonth = remainingAmount * monthlyRate;
          calculatedInstallments.push(principalPayment + interestForMonth);
          remainingAmount -= principalPayment;
        }
      }
      setInstallments(calculatedInstallments);
      setShowResults(true);
    }
  };

  return (
    <ScrollView style={{ padding: 16, backgroundColor: '#fff' }}>
      {!showResults ? (
        <View>
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#1565C0', marginBottom: 16 }}>
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
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
            <TouchableOpacity onPress={() => setIsEqualInstallments(true)} style={styles.radioOption}>
              <Text style={isEqualInstallments ? styles.radioSelected : styles.radioText}>Równe</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsEqualInstallments(false)} style={styles.radioOption}>
              <Text style={!isEqualInstallments ? styles.radioSelected : styles.radioText}>Malejące</Text>
            </TouchableOpacity>
          </View>

          <Button title="Oblicz raty" onPress={calculateInstallments} color="#1565C0" />
        </View>
      ) : (
        <LoanResultScreen installments={installments} onBack={() => setShowResults(false)} />
      )}
    </ScrollView>
  );
}

interface LoanResultScreenProps {
  installments: number[];
  onBack: () => void;
}

function LoanResultScreen({ installments, onBack }: LoanResultScreenProps) {
  const totalPayment = installments.reduce((acc, installment) => acc + installment, 0);

  return (
    <View>
      <Button title="Wróć" onPress={onBack} color="#1565C0" />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 16 }}>Wyniki Kalkulacji</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Raty miesięczne:</Text>

      {installments.map((installment, index) => (
        <View key={index}>
          <Text>Miesiąc {index + 1}</Text>
          <Text>{installment.toFixed(2)} PLN</Text>
        </View>
      ))}

      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#1565C0', marginTop: 20 }}>
        Łączna kwota do spłaty: {totalPayment.toFixed(2)} PLN
      </Text>
    </View>
  );
}


const styles = {
  input: {
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  radioOption: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 16,
  },
  radioText: {
    fontSize: 16,
    color: '#000',
  },
  radioSelected: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1565C0',
  },
};
