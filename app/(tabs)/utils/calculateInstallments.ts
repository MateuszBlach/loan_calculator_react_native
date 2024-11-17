export const calculateInstallments = (
    loanAmount: string,
    interestRate: string,
    months: string,
    isEqualInstallments: boolean
  ): number[] => {
    const loan = parseFloat(loanAmount);
    const rate = parseFloat(interestRate);
    const duration = parseInt(months);
    const monthlyRate = rate / 100 / 12;
  
    let calculatedInstallments: number[] = [];
  
    if (loan && rate && duration) {
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
    }
    return calculatedInstallments;
  };
  