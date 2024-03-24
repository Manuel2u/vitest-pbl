


export function calculateTotalBill(totalTax: number, discount: number, amount: number) {

    const totalTaxAmount = amount * (totalTax / 100)

    console.log(totalTaxAmount);


    const totalDiscountAmount = amount * (discount / 100)

    console.log(totalDiscountAmount);


    const totalBill = amount + totalTaxAmount - totalDiscountAmount

    console.log(totalBill);

    return {
        totalPaid: totalBill,
    }

}