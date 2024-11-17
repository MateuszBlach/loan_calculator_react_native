import React, { useState } from 'react';
import { ScrollView, Button, View } from 'react-native';
import LoanInput from './components/LoanInput';
import LoanResultScreen from './components/LoanResult';
import { calculateInstallments } from './utils/calculateInstallments';

export default function LoanCalculatorApp() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [months, setMonths] = useState('');
  const [isEqualInstallments, setIsEqualInstallments] = useState(true);
  const [installments, setInstallments] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleCalculateInstallments = () => {
    const calculatedInstallments = calculateInstallments(loanAmount, interestRate, months, isEqualInstallments);
    setInstallments(calculatedInstallments);
    setShowResults(true);
  };

  return (
    <ScrollView style={{ padding: 16, backgroundColor: '#fff' }}>
      {!showResults ? (
        <>
          <LoanInput
            loanAmount={loanAmount}
            interestRate={interestRate}
            months={months}
            isEqualInstallments={isEqualInstallments}
            setLoanAmount={setLoanAmount}
            setInterestRate={setInterestRate}
            setMonths={setMonths}
            setIsEqualInstallments={setIsEqualInstallments}
          />
          <Button title="Oblicz raty" onPress={handleCalculateInstallments} color="#1565C0" />
        </>
      ) : (
        <LoanResultScreen installments={installments} onBack={() => setShowResults(false)} />
      )}
    </ScrollView>
  );
}
